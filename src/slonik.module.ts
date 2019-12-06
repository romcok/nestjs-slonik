import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { SlonikService } from './slonik.service';
import { SLONIK_OPTIONS } from './constants';
import {
  SlonikOptions,
  SlonikAsyncOptions,
  SlonikOptionsFactory,
} from './interfaces';
import { createSlonikProviders } from './slonik.providers';
import { connectionFactory } from './slonik-connection.provider';
import { ClassProvider, FactoryProvider } from '@nestjs/common/interfaces';

@Global()
@Module({
  providers: [SlonikService, connectionFactory],
  exports: [SlonikService, connectionFactory],
})
export class SlonikModule {
  /**
   * Registers a configured NestSlonik Module for import into the current module
   */
  public static forRoot(options: SlonikOptions): DynamicModule {
    return {
      module: SlonikModule,
      providers: createSlonikProviders(options),
    };
  }

  /**
   * Registers a configured NestSlonik Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static forRootAsync(options: SlonikAsyncOptions): DynamicModule {
    return {
      module: SlonikModule,
      providers: [...this.createProviders(options)],
    };
  }

  private static createProviders(options: SlonikAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      } as ClassProvider,
    ];
  }

  private static createOptionsProvider(options: SlonikAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        provide: SLONIK_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
      provide: SLONIK_OPTIONS,
      useFactory: async (optionsFactory: SlonikOptionsFactory) =>
        await optionsFactory.createSlonikOptions(),
      inject: [options.useExisting || options.useClass],
    } as FactoryProvider;
  }
}
