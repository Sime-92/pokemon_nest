import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [TypeOrmModule.forFeature([Pokemon])], // Exporta el TypeOrmModule for feature
})

export class PokemonModule {}
