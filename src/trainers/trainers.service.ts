// trainers.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from './entities/trainer.entity';
import { CreateTrainerDto } from './create-trainer.dto';
import { Pokemon } from '../pokemon/entities/pokemon.entity'; 

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer)
    private trainersRepository: Repository<Trainer>,
    @InjectRepository(Pokemon) 
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async create(createTrainerDto: CreateTrainerDto): Promise<Trainer> {
    let pokemonTeam = [];

    // Check if Dto have PokemonTeamIds and if it is true finds these pokemons 
    if (createTrainerDto.pokemonTeamIds && createTrainerDto.pokemonTeamIds.length > 0) {
      pokemonTeam = await this.pokemonRepository.findByIds(createTrainerDto.pokemonTeamIds);
      if (pokemonTeam.length !== createTrainerDto.pokemonTeamIds.length) {
        throw new NotFoundException('One or more Pokémon not found');
      }
    }

    // Create the trainer and assign pokemons 
    const trainer = this.trainersRepository.create({
      ...createTrainerDto,
      pokemonTeam, // Asigna el equipo de Pokémon al entrenador
    });

    return this.trainersRepository.save(trainer);
  }

  async findAll(): Promise<Trainer[]> {//Show all trainers
    return this.trainersRepository.find({ relations: ['pokemonTeam'] });
  }

  //insert here more logic
}
