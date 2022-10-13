import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

enum ButtonState {
  Ready = 'Ready',
  Loading = 'Loading',
  Success = 'Success',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() isLoading$: Observable<boolean>;

  readonly ButtonState = ButtonState;

  currentState$: Observable<ButtonState>;

  ngOnInit(): void {
    this.currentState$ = this.isLoading$.pipe(
      switchMap((isLoading, index) =>
        isLoading
          ? of(ButtonState.Loading)
          : merge(
              of(ButtonState.Ready).pipe(delay(500)),
              of(index === 0 ? ButtonState.Ready : ButtonState.Success).pipe(),
          )
      ),
    )
  }
}
