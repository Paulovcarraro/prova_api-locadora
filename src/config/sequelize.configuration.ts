import { ConfigService } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const sequelizeConfig = (config: ConfigService) => ({
  dialect: 'mysql' as Dialect,
  host: config.get('DB_HOST'),
  port: config.get('DB_PORT'),
  username: config.get('DB_USER'),
  password: config.get('DB_PASS'),
  database: config.get('DB_NAME'),
  autoLoadModels: true,
  synchronize: true,
});