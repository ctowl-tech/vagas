import httpStatus from 'http-status-codes';
import * as R from 'ramda';

import { Logger } from '../../../util/logger';
import { createUser, update, deleted } from '../schema/user';
import {
  IHttpRoute,
  HttpControllerConfig,
  HttpRouter,
  HttpRequest,
  HttpResponse,
  HttpNext,
} from '../../../types/interface';

export class UserController implements IHttpRoute {
  private _validator: HttpControllerConfig['validator'];
  private userUseCase: HttpControllerConfig['coreContainer']['userUseCase'];

  constructor({ validator, coreContainer }: HttpControllerConfig) {
    this._validator = validator;
    this.userUseCase = coreContainer.userUseCase;
  }

  register(r: HttpRouter) {
    r.route('/users')
      .post(
        this._validator(createUser),
        this.postUser.bind(this),
      );

    r.route('/users')
      .get(
        this.getAll.bind(this),
      );

    r.route('/users/:id')
      .put(
        this._validator(update),
        this.update.bind(this),
      );

    r.route('/users/:id')
      .delete(
        this._validator(deleted),
        this.delete.bind(this),
      );

    Logger.debug({
      class: 'UserController',
      classType: 'HttpController',
    }, 'route registration ended');
  }

  async postUser(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const newUser = {
        email: R.path<string>(['body', 'email'], req),
        fullName: R.path<string>(['body', 'fullName'], req),
      };

      const createdUser = await this.userUseCase.createBasicUser(newUser);

      res.status(httpStatus.OK).send(createdUser);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const getAll = await this.userUseCase.getAll();

      res.status(httpStatus.OK).send(getAll);
    } catch (error) {
      next(error);
    }
  }

  async update(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const params = req.params.id;

      const updateUser = {
        email: R.path<string>(['body', 'email'], req),
        fullName: R.path<string>(['body', 'fullName'], req),
      };

      const id = await this.userUseCase.update(updateUser, params);

      const trueOrNot = id === 1;

      res.status(httpStatus.OK).send({ updated: trueOrNot });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const params = req.params.id;

      const id = await this.userUseCase.delete(params);

      const trueOrNot = id === 1;

      res.status(httpStatus.OK).send({ deleted: trueOrNot });
    } catch (error) {
      next(error);
    }
  }
}
