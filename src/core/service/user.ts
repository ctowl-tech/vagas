import {
  IUserService,
  User,
} from '../../types/user';
import { ServiceContext } from '../../types/core';

export class UserService implements IUserService {
  private userRepository: ServiceContext['userRepository'];

  constructor(ctx: ServiceContext) {
    this.userRepository = ctx.userRepository;
  }

  createUser(user: Partial<User>): Promise<User['id']> {
    return this.userRepository.createUser(user);
  }

  getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  update(user: Partial<User>, userId: User['id']): Promise<number> {
    return this.userRepository.update(user, userId);
  }

  delete(userId: User['id']): Promise<number> {
    return this.userRepository.delete(userId);
  }
}
