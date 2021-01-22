import {
  User,
} from '../../../../types/user';

import { createUser } from '../user';
import { Factory } from '../../../../util/test';
import * as UserMocks from './__mocks__/user';

describe('Use case schema unit tests', () => {
  const factory = new Factory();

  beforeAll(() => {
    factory.define('createUser', UserMocks.createUser);
    factory.define('update', UserMocks.update);
  });

  describe('#createUser', () => {
    it('should accept as a valid juridical user schema', () => {
      const params = factory.create<{ user: Partial<User> }>('createUser');

      const { error } = createUser.validate(params);

      expect(error).toBeUndefined();
    });
  });

  describe('#update', () => {
    it('should accept as a valid juridical user schema', () => {
      const params = factory.create<{ user: Partial<User> }>('update');

      const { error } = createUser.validate(params);

      expect(error).toBeUndefined();
    });
  });
});
