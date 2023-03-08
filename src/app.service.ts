import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡hola mundo!';
  }
  getHola(): string {
    return 'Como estas';
  }
}
