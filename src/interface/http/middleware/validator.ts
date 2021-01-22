import { AnySchema } from '@hapi/joi';
import { curryN } from 'ramda';

import { Logger } from '../../../util/logger';
import { BadRequestError } from '../../../util/error';

import { HttpRequest, HttpResponse, HttpNext } from '../../../types/interface';

export const validator = curryN(
  4,
  (schema: AnySchema, req: HttpRequest, res: HttpResponse, next: HttpNext) => {
    const validation = schema.validate(req, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: true,
    });

    if (validation.error) {
      Logger.debug(
        {
          class: 'Validator',
          classType: 'HttpMiddleware',
          details: validation.error.details,
        },
        'invalid request params',
      );

      return next(
        new BadRequestError('Invalid request params', validation.error.details),
      );
    }

    Object.assign(req, validation.value);

    return next();
  },
);
