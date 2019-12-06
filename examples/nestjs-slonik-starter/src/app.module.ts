import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlonikModule } from '../../../src';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    SlonikModule.forRoot({
      connectionConfiguration: process.env.PG_CONNECTION_STRING,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
