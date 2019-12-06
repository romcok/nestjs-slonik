import { SlonikOptions } from './slonik-options.interface';

export interface SlonikOptionsFactory {
  createSlonikOptions(): Promise<SlonikOptions> | SlonikOptions;
}
