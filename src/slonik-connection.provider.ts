import { SLONIK_CONNECTION } from './constants';
import { SlonikService } from './slonik.service';

export const connectionFactory = {
  provide: SLONIK_CONNECTION,
  useFactory: async (slonikService: SlonikService) => {
    return slonikService.getSlonik();
  },
  inject: [SlonikService],
};
