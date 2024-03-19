import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon/entities/pokemon.entity';
import { PokemonModule } from './pokemon/pokemon.module';
import { TrainersModule } from './trainers/trainers.module';
import { Trainer } from './trainers/entities/trainer.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pokemaiac',
      entities: [Pokemon, Trainer],
      synchronize: true,
    }),
    PokemonModule,
    TrainersModule, // Importar PokemonModule aquí
  ],
})
export class AppModule {}