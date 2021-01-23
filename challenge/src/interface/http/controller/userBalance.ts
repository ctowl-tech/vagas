import httpStatus from 'http-status-codes';
import * as R from 'ramda';

import { Logger } from '../../../util/logger';
import { createBalance, discountBalance, getUserBalance } from '../schema/userBalance';
import {
  IHttpRoute,
  HttpControllerConfig,
  HttpRouter,
  HttpRequest,
  HttpResponse,
  HttpNext,
} from '../../../types/interface';

import {
  User,
} from '../../../types/userBalance';

export class UserBalanceController implements IHttpRoute {
  private _validator: HttpControllerConfig['validator'];
  private userBalanceUseCase: HttpControllerConfig['coreContainer']['userBalanceUseCase'];

  constructor({ validator, coreContainer }: HttpControllerConfig) {
    this._validator = validator;
    this.userBalanceUseCase = coreContainer.userBalanceUseCase;
  }

  register(r: HttpRouter) {
    r.route('/users-balance/:id')
      .post(
        this._validator(createBalance),
        this.createBalance.bind(this),
      );

    r.route('/users-balance/:id')
      .put(
        this._validator(discountBalance),
        this.discountBalance.bind(this),
      );

    r.route('/users-balance/:id')
      .get(
        this._validator(getUserBalance),
        this.getUserBalance.bind(this),
      );

    Logger.debug({
      class: 'UserBalanceController',
      classType: 'HttpController',
    }, 'route registration ended');
  }

  async createBalance(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const newBalance = {
        balance: R.path<string>(['body', 'balance'], req),
      };

      const params = req.params.id;

      const createBalances = await this.userBalanceUseCase.crateForBalance(newBalance, params);

      if (!createBalances) {
        res.status(400).send('Id de usuário informado não existe');
      }

      res.status(httpStatus.OK).send(createBalances);
    } catch (error) {
      next(error);
    }
  }

  async discountBalance(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const discount: Partial<User> = {
        discount: R.path<string>(['body', 'discount'], req),
      };

      const params = req.params.id;

      const discountBalances = await this.userBalanceUseCase.discountForBalance(discount, params);

      if (!discountBalances || discountBalances < 1) {
        res.status(400).send('Erro. valor não pode ser maior que saldo ou userId não encontrado');
      }

      res.status(httpStatus.OK).send({ updated: discountBalances });
    } catch (error) {
      next(error);
    }
  }

  async getUserBalance(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const { id } = req.params;

      const getUserBalances = await this.userBalanceUseCase.getForUserBalance(id);

      if (!getUserBalances.length) {
        res.status(400).send('Id de usuário informado não existente');
      }

      res.status(httpStatus.OK).send(getUserBalances);
    } catch (error) {
      next(error);
    }
  }
}
