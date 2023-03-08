import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CrearCatDTO } from './cats.dto';
import { Cats } from './cats.interface';
import { CatsService } from './cats.service';

// EP url/cats
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async crearCats(@Body() crearCatDTO: CrearCatDTO) {
    return this.catsService.crearCat(crearCatDTO);
  }

  @Put()
  async actualizarCats(@Body() crearCatDTO: CrearCatDTO, id: number) {
    return this.catsService.actualizarCat(crearCatDTO, id);
  }

  @Get()
  obtenerCats(): Cats[] {
    return this.catsService.obtenerCats();
  }
}
