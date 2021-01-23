import { env } from './util/env';

import { createContainer } from './interface/container';
import { Logger } from './util/logger';

type AppConfig = {
  http?: boolean;
  cli?: boolean;
};

export class App {
  private _http?: boolean;

  constructor({ http }: AppConfig) {
    this._http = http;
  }

  run() {
    const interfaceContainer = createContainer({
      env,
      init: {
        http: this._http,
      },
    });

    if (this._http) {
      interfaceContainer.httpInterface?.serve();
    }
  }
}

const app = new App({
  http: env.httpActive,
});

setImmediate(() => {
  app.run();
  Logger.debug('app initialized');
});
