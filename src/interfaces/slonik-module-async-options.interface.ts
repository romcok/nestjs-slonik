/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import { SlonikOptions } from './slonik-options.interface';
import { SlonikOptionsFactory } from './slonik-options-factory.interface';

export interface SlonikAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<SlonikOptionsFactory>;
  useClass?: Type<SlonikOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<SlonikOptions> | SlonikOptions;
}
