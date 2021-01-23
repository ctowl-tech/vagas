import dotenv from 'dotenv';

dotenv.config();

const env = {
  /* Http Interface Config */
  httpPort: parseInt(process.env.HTTP_PORT || '5000', 10),
  httpBodyLimit: process.env.HTTP_BODY_LIMIT,
  mysqlPort: parseInt(process.env.MYSQL_PORT || '', 10),
  mysqlHost: process.env.MYSQL_HOST || 'us-cdbr-east-03.cleardb.com',
  mysqlUser: process.env.MYSQL_USER || 'b6e24acdc47cce',
  mysqlPassword: process.env.MYSQL_PASSWORD || '44384c06',
  mysqlSchema: process.env.MYSQL_SCHEMA || 'heroku_9ac7685e83afe1f',
  mysqlDebug: process.env.MYSQL_DEBUG === 'true',
  mysqlPoolMin: parseInt(process.env.MYSQL_POOL_MIN || '0', 10),
  mysqlPoolMax: parseInt(process.env.MYSQL_POOL_MIN || '1', 10),

  /* Application Config */
  httpActive: process.env.HTTP_ACTIVE === 'true',
};

export { env };
