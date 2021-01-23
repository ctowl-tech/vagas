import { UseCaseContext } from '../../../types/core';
import { UserUseCase } from '../user';

describe('User Use Case', () => {
  describe('#constructor', () => {
    it('doesn\'t constructs with undefined UseCaseContext', () => {
      try {
        const uc = new UserUseCase(undefined as unknown as UseCaseContext);
        expect(uc).toBeUndefined();
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('name', 'TypeError');
        expect(error.message).toContain('userService\' of undefined');
      }
    });

    it('constructs with an empty UseCaseContext object', () => {
      const uc = new UserUseCase({} as UseCaseContext);
      expect(uc).toBeInstanceOf(UserUseCase);
      expect(uc).toHaveProperty('createBasicUser');
      expect(uc).toHaveProperty('getAll');
      expect(uc).toHaveProperty('update');
      expect(uc).toHaveProperty('delete');
    });
  });
});
