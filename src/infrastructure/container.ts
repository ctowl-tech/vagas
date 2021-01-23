import { UserRepository } from './repository/user';
import { UserBalanceRepository } from './repository/userBalance';
import { MysqlAdapter } from './adapter/mysql';
import {
  ContainerConfig,
  Container,
} from '../types/infrastructure';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createContainer(config: ContainerConfig): Container {
  return {
    userRepository: new UserRepository({
      mysqlAdapter: new MysqlAdapter(),
    }),
    userBalanceRepository: new UserBalanceRepository({
      mysqlAdapter: new MysqlAdapter(),
    }),
  };
}
