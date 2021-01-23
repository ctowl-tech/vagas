import { HttpInterface } from './http';

import {
  createContainer as createCoreContainer,
} from '../core/container';

import {
  createContainer as createInfraContainer,
} from '../infrastructure/container';

import {
  IHttpInterface,
  ICliInterface,
} from '../types/interface';

type ContainerConfig = {
  env: typeof import('../util/env').env;
  init: {
    http?: boolean;
    cli?: boolean;
  };
};

type Container = {
  httpInterface?: IHttpInterface;
  cliInterface?: ICliInterface;
};

export function createContainer(config: ContainerConfig): Container {
  const container: Container = {};

  const infraContainer = createInfraContainer(config.env);

  const coreContainer = createCoreContainer(infraContainer);

  if (config.init.http) {
    container.httpInterface = new HttpInterface({
      env: config.env,
      coreContainer,
    });
  }

  return container;
}
