import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentConditionsEffects } from './current-conditions.effects';

describe('CurrentConditionsService', () => {
  let actions$: Observable<any>;
  let effects: CurrentConditionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentConditionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CurrentConditionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
