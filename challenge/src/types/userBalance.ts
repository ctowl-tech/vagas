export type User = {
  id: string;
  balance: string;
  discount: string;
};

export interface IUserBalanceRepository {
  createBalance(props: Partial<User>, userId: User['id']): Promise<number>;
  discountBalance(user: Partial<User>, userId: User['id']): Promise<number>;
  getUserBalance(userId: User['id']): Promise<User[]>;
}

export interface IUserBalanceService {
  createBalance(props: Partial<User>, userId: User['id']): Promise<number>;
  discountBalance(user: Partial<User>, userId: User['id']): Promise<number>;
  getUserBalance(userId: User['id']): Promise<User[]>;
}

export interface IUserBalanceUseCase {
  crateForBalance(props: Partial<User>, userId: User['id']): Promise<number>;
  discountForBalance(user: Partial<User>, userId: User['id']): Promise<number>;
  getForUserBalance(userId: User['id']): Promise<User[]>;
}
