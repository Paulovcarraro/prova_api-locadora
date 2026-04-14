import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table
export class Estilo extends Model<Estilo> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare estilo: number;

  @Column(DataType.STRING)
  declare nome: string;
}
