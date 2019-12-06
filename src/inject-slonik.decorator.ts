import { Inject } from '@nestjs/common';
import { SLONIK_CONNECTION } from './constants';

export const InjectSlonik = () => Inject(SLONIK_CONNECTION);
