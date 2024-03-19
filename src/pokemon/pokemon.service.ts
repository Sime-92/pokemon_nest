import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './create-pokemon.dto'; // Asegúrate de crear este DTO

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async findOne(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({
      where: { id: id }
    });
    if (!pokemon) {
      throw new NotFoundException(`Pokemon with ID "${id}" not found`);
    }
    return pokemon;
  }
  
  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const newPokemon = this.pokemonRepository.create(createPokemonDto);
    await this.pokemonRepository.save(newPokemon);
    return newPokemon;
  }

  //Delete pokemon
async delete(id:number): Promise <void> {
  const result = await this.pokemonRepository.delete(id);
  if (result.affected === 0){
throw new NotFoundException (`Pokemon with ID "${id}" not found!`);
  }
}

//Find by type
async findByType(type: string): Promise<Pokemon[]> {
  if (!type) {
    return this.findAll();
  }
  return this.pokemonRepository.find({
    where: {
      type: type,
    },
  });
}


}
