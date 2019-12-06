import { Injectable, Inject, Logger } from '@nestjs/common';
import { SLONIK_OPTIONS } from './constants';
import { SlonikOptions, Slonik } from './interfaces';
import { createPool } from 'slonik';

interface ISlonikService {
  getSlonik(): Slonik;
}

@Injectable()
export class SlonikService implements ISlonikService {
  private readonly logger: Logger;
  private slonikConnection: Slonik | undefined;
  constructor(@Inject(SLONIK_OPTIONS) private slonikOptions: SlonikOptions) {
    this.logger = new Logger('SlonikService');
    this.logger.log(`Options: ${JSON.stringify(this.slonikOptions)}`);
  }

  getSlonik(): Slonik {
    if (!this.slonikConnection) {
      this.slonikConnection = createPool(
        this.slonikOptions.connectionConfiguration,
        this.slonikOptions.clientUserConfiguration,
      );
    }
    return this.slonikConnection;
  }
}
