import { ContainerConfig, Container } from '../types/core';

import { UserUseCase } from './useCase/user';

import { UserService } from './service/user';

import { UserBalanceService } from './service/userBalance';

import { UserBalanceUseCase } from './useCase/userBalance';

export function createContainer(config: ContainerConfig): Container {
  const serviceContext = {
    userRepository: config.userRepository,
    userBalanceRepository: config.userBalanceRepository,
  };

  const useCaseContext = {
    userService: new UserService(serviceContext),
    userBalanceService: new UserBalanceService(serviceContext),
  };

  return {
    userUseCase: new UserUseCase(useCaseContext),
    userBalanceUseCase: new UserBalanceUseCase(useCaseContext),
  };
}
