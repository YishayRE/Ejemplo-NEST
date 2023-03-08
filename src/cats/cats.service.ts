import { Injectable } from '@nestjs/common';
import { CrearCatDTO } from './cats.dto';
import { Cats } from './cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cats[] = []; //readonly - const

  crearCat(catDTO: CrearCatDTO): string {
    const { nombre, color, peso } = catDTO;

    this.cats.push({
      nombre,
      color,
      peso,
    });

    return 'Gato creado';
  }
  actualizarCat(catDTO: CrearCatDTO, id: number): string {
    const { nombre, color, peso } = catDTO;

    this.cats[id] = {
      nombre,
      color,
      peso,
    };

    return 'Gato actualizado';
  }
  obtenerCats(): Cats[] {
    return this.cats;
  }
}
