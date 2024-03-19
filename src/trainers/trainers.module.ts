// trainers.module.ts

import { Module } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { PokemonModule } from '../pokemon/pokemon.module'; // Asegúrate de importar correctamente

@Module({
  imports: [
    TypeOrmModule.forFeature([Trainer]),
    PokemonModule, // Importa el PokemonModule aquí
  ],
  providers: [TrainersService],
  controllers: [TrainersController],
})
export class TrainersModule {}
