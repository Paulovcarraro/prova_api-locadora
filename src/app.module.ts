import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { sequelizeConfig } from './config/sequelize.configuration';

import { FilmesModule } from './filmes/filmes.module';
import { EstilosModule } from './estilos/estilos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => sequelizeConfig(config),
    }),

    FilmesModule,
    EstilosModule,
  ],
})
export class AppModule {}
