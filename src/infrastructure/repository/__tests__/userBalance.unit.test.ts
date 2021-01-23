import { UserBalanceRepository } from '../userBalance';
import { MysqlAdapter } from '../../adapter/mysql';

import { MysqlDatabase } from '../../../types/infrastructure';

describe('user repository', () => {
  describe('#constructor', () => {
    it('constructs with all properties', () => {
      const mysqlAdapter = new MysqlAdapter({
        dbConn: jest.fn() as unknown as MysqlDatabase,
      });
      const u = new UserBalanceRepository({
        mysqlAdapter,
      });

      expect(u).toBeDefined();
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      expect(mysqlAdapter._tbName).toEqual('user_balance');
      expect(u.createBalance).toBeInstanceOf(Function);
      expect(u.discountBalance).toBeInstanceOf(Function);
      expect(u.getUserBalance).toBeInstanceOf(Function);
    });
  });

  // describe('#createUserBalance', () => {
  //   it('create a user', async () => {
  //     const dbConn = jest.fn(() => {
  //       return {
  //         insert: jest.fn().mockResolvedValue(true),
  //       };
  //     }) as unknown as MysqlDatabase;
  //     const mysqlAdapter = new MysqlAdapter({ dbConn });
  //     const u = new UserBalanceRepository({
  //       mysqlAdapter,
  //     });

  //     const goodUser = {
  //       balance: "2323",
  //     };

  //     const params = chance.guid();

  //     const goodUserId = await u.createBalance(goodUser, params);

  //     // expect(goodUserId).toMatchSchema(
  //     //   joi.string().guid({ version: 'uuidv4' }).required(),
  //     // );
  //   });
  // });
});
