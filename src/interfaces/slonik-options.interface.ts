import {
  DatabaseConfigurationType,
  ClientConfigurationInputType,
} from 'slonik';

// tslint:disable-next-line: no-empty-interface
export interface SlonikOptions {
  connectionConfiguration: string; // DatabaseConfigurationType;
  clientUserConfiguration?: ClientConfigurationInputType;
}
