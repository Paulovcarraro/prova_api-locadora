import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Filme } from './filmes.model';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';

@Module({
  imports: [SequelizeModule.forFeature([Filme])],
  providers: [FilmesService],
  controllers: [FilmesController],
})
export class FilmesModule {}
