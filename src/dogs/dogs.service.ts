import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  createDogs(): string {
    return 'Se ha creado un dog correctamente';
  }
  getHelloDogs(): string {
    return 'Hola desde dogs';
  }
  getHelloDogsEspecific(): string {
    return 'Yo soy un perro de raza especifica';
  }
}