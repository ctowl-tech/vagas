export type User = {
  id: string;
  email: string;
  fullName: string;
};

export interface IUserRepository {
  createUser(user: Partial<User>): Promise<User['id']>;
  getAll(): Promise<User[]>;
  update(user: Partial<User>, userId: User['id']): Promise<number>;
  delete(userId: User['id']): Promise<number>;
}

export interface IUserService {
  createUser(user: Partial<User>): Promise<User['id']>;
  getAll(): Promise<User[]>;
  update(user: Partial<User>, userId: User['id']): Promise<number>;
  delete(userId: User['id']): Promise<number>;
}

export interface IUserUseCase {
  createBasicUser(props: Partial<User>): Promise<User>;
  getAll(): Promise<User[]>;
  update(user: Partial<User>, userId: User['id']): Promise<number>;
  delete(userId: User['id']): Promise<number>;
}
