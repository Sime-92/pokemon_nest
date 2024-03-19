import { IsString, IsInt, IsOptional, Min, Max, IsArray } from 'class-validator';

export class CreateTrainerDto {
    @IsString()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly hometown?: string;

    @IsString()
    readonly gym: string;

    @IsString()
    readonly specialty: string = 'perseverancia';

    @IsInt()
    @Min(0)
    readonly score: number;

    // Opcionalmente, si quieres permitir asignar Pokémon al entrenador directamente en la creación
    @IsArray()
    @IsOptional()
    readonly pokemonTeamIds?: number[];
}
