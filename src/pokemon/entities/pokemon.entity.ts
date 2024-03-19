import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Trainer } from '../../trainers/entities/trainer.entity'

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    specialAttack: string; // A unique or special attack for the Pokemon

    @Column({ default: 1 })
    level: number; // The level of the Pokemon, default is 1

    @Column('float')
    healthPoints: number; // Health points (HP) of the Pokemon

    @Column('float', { default: 0.0 })
    speed: number; // Speed determines the Pokemon's order of actions in battles

    @Column('text', { nullable: true })
    description: string; // A brief description of the Pokemon

    @ManyToOne(() => Trainer, trainer => trainer.pokemonTeam)
    trainer: Trainer;
}
