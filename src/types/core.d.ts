import { IUserService, IUserUseCase } from './user';
import { IUserBalanceUseCase, IUserBalanceService } from './userBalance';

import { Container as infraContainer } from './infrastructure';

export type Container = {
  userUseCase: IUserUseCase;
  userBalanceUseCase: IUserBalanceUseCase;
};

export type ContainerConfig = {
  userRepository: infraContainer['userRepository'];
  userBalanceRepository: infraContainer['userBalanceRepository'];
};

export type ServiceContext = {
  userRepository: ContainerConfig['userRepository'];
  userBalanceRepository: ContainerConfig['userBalanceRepository'];
};

export type UseCaseContext = {
  userService: IUserService;
  userBalanceService: IUserBalanceService;
};
