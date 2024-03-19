import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';

@Entity()
export class Trainer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; // Nombre del entrenador, e.g., "Ash"

    @Column({ nullable: true })
    hometown: string; // Ciudad natal del entrenador, e.g., "Pueblo Paleta"

    @Column({ default: 'none' })
    specialty: string; // Especialidad o virtud del entrenador, e.g., "Perseverancia"

    @Column()
    gym: string; // El gimnasio Pokémon al que pertenece o que lidera, e.g., "Gimnasio de Ciudad Verde"

    @Column('int', { default: 0 })
    score: number; // Puntuación o número de medallas obtenidas, e.g., 10

    @OneToMany(() => Pokemon, pokemon => pokemon.trainer, { eager: true })
    pokemonTeam: Pokemon[]; // Equipo de Pokémon del entrenador
}
