import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Filme } from './filmes.model';

@Injectable()
export class FilmesService {
  constructor(
    @InjectModel(Filme)
    private filmeModel: typeof Filme,
  ) {}

  create(data: any) {
    return this.filmeModel.create(data);
  }

  findAll() {
    return this.filmeModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.filmeModel.findByPk(id);
  }

  update(id: number, data: any) {
    return this.filmeModel.update(data, { where: { filme: id } });
  }

  delete(id: number) {
    return this.filmeModel.destroy({ where: { filme: id } });
  }
}
