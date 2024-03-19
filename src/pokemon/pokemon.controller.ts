import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';


@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }
  @Get()
  async findAll(@Query('type') type?: string): Promise<Pokemon[]> {
    if (type) {
      return this.pokemonService.findByType(type);
    }
    return this.pokemonService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.findOne(+id);
  }
  // Otros endpoints aquí
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.pokemonService.delete(id);
  }
}
