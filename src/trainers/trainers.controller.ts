import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './create-trainer.dto';
import { Trainer } from './entities/trainer.entity';

@Controller('trainers')
export class TrainersController {
  constructor(private trainersService: TrainersService) {}

  @Post()
  create(@Body() createTrainerDto: CreateTrainerDto): Promise<Trainer> {
    return this.trainersService.create(createTrainerDto);
  }

  @Get()
  findAll(): Promise<Trainer[]> {
    return this.trainersService.findAll();
  }

  // Añade más rutas según necesites, como GET para encontrar por ID, DELETE para eliminar, etc.
}
