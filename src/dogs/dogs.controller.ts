import { Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getHello(): string {
    return this.dogsService.getHelloDogs();
  }

  @Get('/especifico')
  getHelloEspecific(): string {
    return this.dogsService.getHelloDogsEspecific();
  }

  @Post()
  createDogs(): string {
    return this.dogsService.createDogs();
  }
}
