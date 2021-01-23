import R from 'ramda';
import httpStatusCodes from 'http-status-codes';

import { Logger } from '../../../util/logger';
import {
  OutOfCuttingTimeError,
  InternalServerError,
  BadRequestError,
  NotFoundError,
} from '../../../util/error';

import { HttpRequest, HttpResponse, HttpNext } from '../../../types/interface';

export const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: HttpRequest,
  res: HttpResponse,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: HttpNext,
) => {
  let status = httpStatusCodes.INTERNAL_SERVER_ERROR;
  let throwErr = err;

  if (err instanceof BadRequestError) {
    status = httpStatusCodes.BAD_REQUEST;
  }

  if (err instanceof NotFoundError) {
    status = httpStatusCodes.NOT_FOUND;
  }

  if (err instanceof OutOfCuttingTimeError) {
    status = httpStatusCodes.BAD_GATEWAY;
    throwErr = err;
  }

  if (status !== httpStatusCodes.INTERNAL_SERVER_ERROR) {
    Logger.warn(err);
  } else {
    throwErr = new InternalServerError(throwErr.message, throwErr.details);

    Logger.error(err);
  }

  return res.status(status).send(
    R.reject(R.isNil, {
      code: throwErr.code,
      message: throwErr.message,
      details: throwErr.details,
    }),
  );
};
