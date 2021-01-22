import { IUserService, IUserUseCase } from './user';
import { Container as infraContainer } from './infrastructure';

export type Container = {
  userUseCase: IUserUseCase;
};

export type ContainerConfig = {
  userRepository: infraContainer['userRepository'];
};

export type ServiceContext = {
  userRepository: ContainerConfig['userRepository'];
};

export type UseCaseContext = {
  userService: IUserService;
};
