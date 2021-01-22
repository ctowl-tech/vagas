import { init } from '@somosphi/logger';

export const {
  ExpressLogger,
  Logger,
} = init({
  PROJECT_NAME: 'wallet-manager',
  LOG_LEVEL: process.env.NODE_ENV === 'test' ? 'fatal' : 'debug',
});
