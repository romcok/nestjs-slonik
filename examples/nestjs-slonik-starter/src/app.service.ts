import { Injectable, Inject } from '@nestjs/common';
import { sql } from 'slonik';
import { SLONIK_CONNECTION, Slonik, SlonikService, InjectSlonik } from '../../../src';

@Injectable()
export class AppService {
  constructor(@InjectSlonik() private readonly slonik: Slonik) {}

  async getHello(): Promise<string> {
    console.log(await await this.slonik.one(sql`SELECT 1+1`));
    return await await this.slonik.one(sql`SELECT 1+1`);
  }
}
