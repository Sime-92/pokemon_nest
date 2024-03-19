// create-pokemon.dto.ts

export class CreatePokemonDto {
    name: string;
    type: string;
    specialAttack: string;
    level?: number;
    healthPoints: number;
    speed?: number;
    description?: string;
  }
  