import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estilo } from './estilos.model';
import { EstilosController } from './estilos.controller';
import { EstilosService } from './estilos.service';

@Module({
  imports: [SequelizeModule.forFeature([Estilo])],
  controllers: [EstilosController], 
  providers: [EstilosService],     
})
export class EstilosModule {}