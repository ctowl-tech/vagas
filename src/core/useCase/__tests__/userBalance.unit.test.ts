import { UseCaseContext } from '../../../types/core';
import { UserBalanceUseCase } from '../userBalance';

describe('User Use Case', () => {
  describe('#constructor', () => {
    it('doesn\'t constructs with undefined UseCaseContext', () => {
      try {
        const uc = new UserBalanceUseCase(undefined as unknown as UseCaseContext);
        expect(uc).toBeUndefined();
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('name', 'TypeError');
        expect(error.message).toContain('userBalanceService\' of undefined');
      }
    });

    it('constructs with an empty UseCaseContext object', () => {
      const uc = new UserBalanceUseCase({} as UseCaseContext);
      expect(uc).toBeInstanceOf(UserBalanceUseCase);
      expect(uc).toHaveProperty('crateForBalance');
      expect(uc).toHaveProperty('discountForBalance');
      expect(uc).toHaveProperty('getForUserBalance');
    });
  });
});
