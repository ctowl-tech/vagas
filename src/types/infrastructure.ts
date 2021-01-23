import knex from 'knex';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IUserRepository } from './user';
import { IUserBalanceRepository } from './userBalance';

/* Http Adapter */
export interface IHttpAdapterConstructs {
  new(config: AxiosRequestConfig): IHttpAdapter;
}

export interface IHttpAdapter {
  send(config: AxiosRequestConfig): Promise<AxiosResponse>;
}

/* MySQL Adapter */
export type MysqlDatabase = knex;

export type MysqlAdapterConfig = {
  dbConn: MysqlDatabase;
};

export interface IMysqlAdapter {
  db: knex.QueryBuilder;
  tableName: string;
}

/* Message Bus Adapter */
export type MessageContent = unknown;

/* Infrastructure */
export type Container = {
  userRepository: IUserRepository;
  userBalanceRepository: IUserBalanceRepository;
};

export type ContainerConfig = {
};
