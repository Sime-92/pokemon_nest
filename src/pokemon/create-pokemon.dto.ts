import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreatePokemonDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    specialAttack: string;

    @IsOptional()
    @IsNumber()
    level?: number;

    @IsNumber()
    @IsNotEmpty()
    healthPoints: number;

    @IsOptional()
    @IsNumber()
    speed?: number;

    @IsOptional()
    @IsString()
    description?: string;
}
