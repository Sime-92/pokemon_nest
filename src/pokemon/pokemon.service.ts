// pokemon.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  findAll(): string {
    return 'Get all Pokemon';
  }
}
