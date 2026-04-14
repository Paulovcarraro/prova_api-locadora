import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

import { Estilo } from '../estilos/estilos.model';

@Table
export class Filme extends Model<Filme> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare filme: number;

  @ForeignKey(() => Estilo)
  @Column(DataType.INTEGER)
  declare estilo: number;

  @Column(DataType.STRING)
  declare nome: string;

  @Column(DataType.STRING)
  declare ano: string;

  @Column(DataType.STRING)
  declare duracao: string;

  @Column(DataType.STRING)
  declare foto: string;

  @Column(DataType.TEXT)
  declare sinopse: string;

  @Column(DataType.STRING)
  declare video: string;

  @BelongsTo(() => Estilo)
  declare estiloData: Estilo;
}
