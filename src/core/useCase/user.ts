import * as R from 'ramda';
import { AnySchema } from '@hapi/joi';

import { IUserUseCase, User } from '../../types/user';
import { UseCaseContext } from '../../types/core';
import { InvalidProperties } from '../../util/error';
import { createUser, update } from './schemas/user';

export class UserUseCase implements IUserUseCase {
  private userService: UseCaseContext['userService'];

  constructor(ctx: UseCaseContext) {
    this.userService = ctx.userService;
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

  async createBasicUser(props: Partial<User>) {
    this.validateProperties({
      props,
      schema: createUser,
      errorMsg: 'Invalid properties to create account',
    });

    const user = {
      email: props.email,
      fullName: props.fullName,
    };

    const userId = await this.userService.createUser(user);

    return R.assoc('id', userId, user) as User;
  }

  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  async update(props: Partial<User>, userId: User['id']): Promise<number> {
    this.validateProperties({
      props,
      schema: update,
      errorMsg: 'Invalid properties to update account',
    });
    const user = {
      email: props.email,
      fullName: props.fullName,
    };
    return this.userService.update(user, userId);
  }

  async delete(userId: User['id']): Promise<number> {
    return this.userService.delete(userId);
  }
}
