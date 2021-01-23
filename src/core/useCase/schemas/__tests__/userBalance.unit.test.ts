import {
  User,
} from '../../../../types/userBalance';

import { createBalance, discountBalance } from '../userBalance';
import { Factory } from '../../../../util/test';
import * as UserBalanceMocks from './__mocks__/userBalance';

describe('Use case schema unit tests', () => {
  const factory = new Factory();

  beforeAll(() => {
    factory.define('createBalance', UserBalanceMocks.createBalance);
    factory.define('discountBalance', UserBalanceMocks.discountBalance);
  });

  describe('#createBalance', () => {
    it('should accept as a valid createBalance schema', () => {
      const params = factory.create<{ user: Partial<User> }>('createBalance');

      const { error } = createBalance.validate(params);

      expect(error).toBeUndefined();
    });
  });

  describe('#discountBalance', () => {
    it('should accept as a valid discountBalance user schema', () => {
      const params = factory.create<{ user: Partial<User> }>('discountBalance');

      const { error } = discountBalance.validate(params);

      expect(error).toBeUndefined();
    });
  });
});
