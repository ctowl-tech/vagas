import { AnySchema } from '@hapi/joi';

import { IUserBalanceUseCase, User } from '../../types/userBalance';
import { UseCaseContext } from '../../types/core';
import { InvalidProperties } from '../../util/error';
import { createBalance, discountBalance } from './schemas/userBalance';

export class UserBalanceUseCase implements IUserBalanceUseCase {
  private userBalanceService: UseCaseContext['userBalanceService'];

  constructor(ctx: UseCaseContext) {
    this.userBalanceService = ctx.userBalanceService;
  }

  // eslint-disable-next-line class-methods-use-this
  private validateProperties(
    { schema, props, errorMsg }: { schema: AnySchema; props: object; errorMsg: string },
  ): void {
    const validation = schema.validate(props, {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: false,
    });

    if (validation.error) {
      throw new InvalidProperties(errorMsg, validation.error.details);
    }
  }

  async crateForBalance(props: Partial<User>, userId: User['id']) {
    this.validateProperties({
      props,
      schema: createBalance,
      errorMsg: 'Invalid properties to create balance',
    });

    const user = {
      balance: props.balance,
    };

    return this.userBalanceService.createBalance(user, userId);
  }

  async discountForBalance(props: Partial<User>, userId: User['id']) {
    this.validateProperties({
      props,
      schema: discountBalance,
      errorMsg: 'Invalid properties to discountBalance',
    });

    const user = {
      discount: props.discount,
    };

    return this.userBalanceService.discountBalance(user, userId);
  }

  async getForUserBalance(userId: User['id']) {
    return this.userBalanceService.getUserBalance(userId);
  }
}
