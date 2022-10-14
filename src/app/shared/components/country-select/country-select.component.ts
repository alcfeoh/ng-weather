import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CountryService } from 'app/country.service';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { debounceTime, filter, map, skip, startWith, switchMap, tap } from 'rxjs/operators';

export type CountrySelectOption = {
  name: string;
  code: string;
}

@Component({
  selector: 'app-country-select',
  templateUrl: 'country-select.component.html',
  providers: [
    CountryService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountrySelectComponent),
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('input', { static: true }) input: ElementRef;

  countries$: Observable<CountrySelectOption[]>;
  disabled: boolean = false;
  inputFieldValue: string = null;
  overlayOpen: boolean = false;
  value: CountrySelectOption;

  protected onModelChange: Function = () => {};
  protected onModelTouched: Function = () => {};

  get searchQuery(): string { return (this.inputElement.value || '').trim(); }
  get inputElement(): HTMLInputElement { return this.input?.nativeElement; }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private countryService: CountryService,
  ) {}

  ngAfterViewInit(): void {
    this.countries$ = combineLatest([
      fromEvent(this.inputElement, 'input').pipe(
        startWith(null),
        debounceTime(500),
        tap(() => this.value = null),
      ),
      fromEvent(this.inputElement, 'click').pipe(startWith(null)),
    ])
    .pipe(
      skip(1),
      switchMap(() => this.search(this.searchQuery)),
      tap(countries => this.overlayOpen = Boolean(countries?.length))
    )

    this.changeDetectorRef.markForCheck();
  }

  writeValue(value: CountrySelectOption) : void {
    this.value = value;
    this.updateInputField();
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: () => unknown): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => unknown): void {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
    this.changeDetectorRef.markForCheck();
  }

  selectOption(option: CountrySelectOption, focus: boolean) {
    this.inputElement.value = this.prepareInputValue(option);
    this.value = option;
    this.onModelChange(this.value);
    this.overlayOpen = false;
    this.inputElement.focus();
  }

  prepareInputValue(value: CountrySelectOption): string {
    return value?.name ?? '';
  }

  toggleOverlay(): void {
    this.overlayOpen = !this.overlayOpen;
    this.updateInputField();
  }

  private search(query: string): Observable<CountrySelectOption[]> {
    return this.countryService.searchCountries(query).pipe(
      filter(countries => Boolean(countries)),
      map(countries => countries
        .filter(({ name: { common } }) => common.toLowerCase().includes(query.toLowerCase()))
        .map(({ name: { common }, cca2 }) => ({ name: common, code: cca2 }))
      ),
    );
  }

  private updateInputField(): void {
    const formattedValue = this.prepareInputValue(this.value);
    this.inputFieldValue = formattedValue;

    this.inputElement.value = formattedValue;
  }
}
