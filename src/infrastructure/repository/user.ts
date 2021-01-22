import * as R from 'ramda';
import { v4 as uuid } from 'uuid';

import {
  IUserRepository,
  User,
} from '../../types/user';
import {
  IMysqlAdapter,
} from '../../types/infrastructure';

type Context = {
  mysqlAdapter: IMysqlAdapter;
};

export class UserRepository implements IUserRepository {
  private mysqlAdapter: Context['mysqlAdapter'];

  constructor({
    mysqlAdapter,
  }: Context) {
    this.mysqlAdapter = mysqlAdapter;
    this.mysqlAdapter.tableName = 'user';
    // eslint-disable-next-line new-cap
  }

  async createUser(user: Partial<User>): Promise<User['id']> {
    const userId = uuid();
    const __user__ = R.assoc('id', userId, user);

    return this.mysqlAdapter
      .db
      .insert(__user__)
      .then(() => userId);
  }

  async getAll(): Promise<User[]> {
    return this.mysqlAdapter
      .db
      .select('id', 'email', 'fullName')
      .table('user');
  }

  async update(user: Partial<User>, userId: User['id']): Promise<number> {
    const __user__ = user;

    return this.mysqlAdapter
      .db
      .from('user')
      .update(__user__)
      .where('id', userId);
  }

  async delete(userId: User['id']): Promise<number> {
    const __user__ = userId;

    return this.mysqlAdapter
      .db
      .from('user')
      .where('id', __user__)
      .del();
  }
}
