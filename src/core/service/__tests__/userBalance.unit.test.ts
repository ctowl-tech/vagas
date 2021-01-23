import { Chance } from 'chance';
import { ServiceContext } from '../../../types/core';

import { User } from '../../../types/userBalance';

import { UserBalanceService } from '../userBalance';

const chance = new Chance();

describe('Account Service', () => {
  describe('#constructor', () => {
    it('doesn\'t construct without a ServiceContext object', () => {
      try {
        const svc = new UserBalanceService(undefined as unknown as ServiceContext);
        expect(svc).toBeUndefined();
      } catch (error) {
        expect(error).toBeDefined();
        expect(error).toBeInstanceOf(Error);
        expect(error.name).toBe('TypeError');
        expect(error.message).toContain('\'userBalanceRepository\' of undefined');
      }
    });

    it('constructs with an empty object', () => {
      const svc = new UserBalanceService({} as ServiceContext);
      expect(svc).toBeDefined();
      expect(svc).toBeInstanceOf(UserBalanceService);
      expect(svc).toHaveProperty('userBalanceRepository', undefined);
    });
  });

  describe('#createBalance', () => {
    it('should call repository with a valid userBalance', async () => {
      const fakeContext = {
        userBalanceRepository: {
          createBalance: jest.fn(),
        },
      };

      const params: Partial<User> = {};
      const params2 = chance.guid();

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const svc = new UserBalanceService(fakeContext);

      await svc.createBalance(params, params2);

      expect(fakeContext.userBalanceRepository.createBalance).toHaveBeenCalledWith(params, params2);
    });
  });

  describe('#discountBalance', () => {
    it('should call repository with a discountBalance user', async () => {
      const fakeContext = {
        userBalanceRepository: {
          discountBalance: jest.fn(),
        },
      };

      const params: Partial<User> = {};
      const params2 = chance.guid();

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const svc = new UserBalanceService(fakeContext);

      await svc.discountBalance(params, params2);

      expect(fakeContext.userBalanceRepository.discountBalance).toHaveBeenCalledWith(params, params2);
    });
  });

  describe('#getUserBalanceById', () => {
    it('should call repository with a getUserBalanceById', async () => {
      const fakeContext = {
        userBalanceRepository: {
          getUserBalance: jest.fn(),
        },
      };

      const params = chance.guid();

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const svc = new UserBalanceService(fakeContext);

      await svc.getUserBalance(params);

      expect(fakeContext.userBalanceRepository.getUserBalance).toHaveBeenCalledWith(params);
    });
  });
});
