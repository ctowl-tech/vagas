import {
  IUserBalanceRepository,
  User,
} from '../../types/userBalance';
import {
  IMysqlAdapter,
} from '../../types/infrastructure';

type Context = {
  mysqlAdapter: IMysqlAdapter;
};

export class UserBalanceRepository implements IUserBalanceRepository {
  private mysqlAdapter: Context['mysqlAdapter'];

  constructor({
    mysqlAdapter,
  }: Context) {
    this.mysqlAdapter = mysqlAdapter;
    this.mysqlAdapter.tableName = 'user_balance';
    // eslint-disable-next-line new-cap
  }

  async createBalance(user: Partial<User>, userId: User['id']): Promise<number> {
    const data = {
      user_id: userId,
      ...user,
    };

    const exist = this.mysqlAdapter
      .db
      .select('id')
      .table('user')
      .where('id', data.user_id);

    const queryLength = await exist;

    if (!queryLength.length) {
      return queryLength;
    }

    return this.mysqlAdapter
      .db
      .from('user_balance')
      .insert(data);
  }

  async discountBalance(user: User, userId: User['id']): Promise<number> {
    const data = {
      id: userId,
    };

    const exist = this.mysqlAdapter
      .db
      .select('id')
      .table('user_balance')
      .where('id', data.id);

    const queryLength = await exist;

    if (!queryLength.length) {
      return queryLength;
    }

    const value = this.mysqlAdapter
      .db
      .select('balance')
      .table('user_balance')
      .where('id', data.id);

    const valueDifference = await value;

    if (user.discount > valueDifference[0].balance) {
      return 0;
    }

    return this.mysqlAdapter
      .db
      .from('user_balance')
      .update({ balance: parseInt(valueDifference[0].balance, 10) - parseInt(user.discount, 10) })
      .where('id', userId);
  }

  async getUserBalance(userId: User['id']): Promise<User[]> {
    const exist = this.mysqlAdapter
      .db
      .select('id')
      .table('user_balance')
      .where('id', userId);

    const queryLength = await exist;

    if (!queryLength.length) {
      return queryLength;
    }

    return this.mysqlAdapter
      .db
      .select('id', 'user_id', 'balance')
      .table('user_balance')
      .where('id', userId);
  }
}
