import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { CatsService } from './cats/cats.service';
import { DogsService } from './dogs/dogs.service';
import { ParrotsController } from './parrots/parrots.controller';
import { ParrotsService } from './parrots/parrots.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController, ParrotsController],
  providers: [AppService, CatsService, DogsService, ParrotsService],
})
export class AppModule {}
