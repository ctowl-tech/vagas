import {
  User,
  IUserBalanceService,
} from '../../types/userBalance';

import { ServiceContext } from '../../types/core';

export class UserBalanceService implements IUserBalanceService {
  private userBalanceRepository: ServiceContext['userBalanceRepository'];

  constructor(ctx: ServiceContext) {
    this.userBalanceRepository = ctx.userBalanceRepository;
  }

  createBalance(user: Partial<User>, userId: User['id']): Promise<number> {
    return this.userBalanceRepository.createBalance(user, userId);
  }

  discountBalance(user: Partial<User>, userId: User['id']): Promise<number> {
    return this.userBalanceRepository.discountBalance(user, userId);
  }

  getUserBalance(userId: User['id']): Promise<User[]> {
    return this.userBalanceRepository.getUserBalance(userId);
  }
}
