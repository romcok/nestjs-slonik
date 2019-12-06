import { SlonikOptions } from './interfaces';
import { SLONIK_OPTIONS } from './constants';

export function createSlonikProviders(options: SlonikOptions) {
  return [
    {
      provide: SLONIK_OPTIONS,
      useValue: options,
    },
  ];
}
