import { ContainerConfig, Container } from '../types/core';

import { UserUseCase } from './useCase/user';

import { UserService } from './service/user';

export function createContainer(config: ContainerConfig): Container {
  const serviceContext = {
    userRepository: config.userRepository,
  };

  const useCaseContext = {
    userService: new UserService(serviceContext),
  };

  return {
    userUseCase: new UserUseCase(useCaseContext),
  };
}
