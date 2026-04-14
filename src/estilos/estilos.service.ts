import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Estilo } from './estilos.model';

@Injectable()
export class EstilosService {
  constructor(
    @InjectModel(Estilo)
    private estiloModel: typeof Estilo,
  ) {}

  create(data: any) {
    return this.estiloModel.create(data);
  }

  findAll() {
    return this.estiloModel.findAll();
  }

  findOne(id: number) {
    return this.estiloModel.findByPk(id);
  }

  update(id: number, data: any) {
    return this.estiloModel.update(data, { where: { estilo: id } });
  }

  delete(id: number) {
    return this.estiloModel.destroy({ where: { estilo: id } });
  }
}
