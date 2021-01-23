import { Chance } from 'chance';
import { ServiceContext } from '../../../types/core';

import { User } from '../../../types/user';

import { UserService } from '../user';

const chance = new Chance();

describe('Account Service', () => {
  describe('#constructor', () => {
    it('doesn\'t construct without a ServiceContext object', () => {
      try {
        const svc = new UserService(undefined as unknown as ServiceContext);
        expect(svc).toBeUndefined();
      } catch (error) {
        expect(error).toBeDefined();
        expect(error).toBeInstanceOf(Error);
        expect(error.name).toBe('TypeError');
        expect(error.message).toContain('\'userRepository\' of undefined');
      }
    });

    it('constructs with an empty object', () => {
      const svc = new UserService({} as ServiceContext);
      expect(svc).toBeDefined();
      expect(svc).toBeInstanceOf(UserService);
      expect(svc).toHaveProperty('userRepository', undefined);
    });
  });

  describe('#createUser', () => {
    it('should call repository with a valid user', async () => {
      const fakeContext = {
        userRepository: {
          createUser: jest.fn(),
        },
      };

      const params: Partial<User> = {};

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const svc = new UserService(fakeContext);

      await svc.createUser(params);

      expect(fakeContext.userRepository.createUser).toHaveBeenCalledWith(params);
    });
  });

  describe('#getAll', () => {
    it('should call repository with a getAll user', async () => {
      const fakeContext = {
        userRepository: {
          getAll: jest.fn(),
        },
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const svc = new UserService(fakeContext);

      await svc.getAll();

      expect(fakeContext.userRepository.getAll).toHaveBeenCalledWith();
    });
  });

  describe('#update', () => {
    it('should call repository with a update user', async () => {
      const fakeContext = {
        userRepository: {
          update: jest.fn(),
        },
      };

      const params: Partial<User> = {};
      const params2 = chance.guid();

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const svc = new UserService(fakeContext);

      await svc.update(params, params2);

      expect(fakeContext.userRepository.update).toHaveBeenCalledWith(params, params2);
    });
  });

  describe('#delete', () => {
    it('should call repository with a delete user', async () => {
      const fakeContext = {
        userRepository: {
          delete: jest.fn(),
        },
      };

      const params = chance.guid();

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const svc = new UserService(fakeContext);

      await svc.delete(params);

      expect(fakeContext.userRepository.delete).toHaveBeenCalledWith(params);
    });
  });
});
