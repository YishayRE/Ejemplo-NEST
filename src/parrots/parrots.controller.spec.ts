import { Test, TestingModule } from '@nestjs/testing';
import { ParrotsController } from './parrots.controller';

describe('ParrotsController', () => {
  let controller: ParrotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParrotsController],
    }).compile();

    controller = module.get<ParrotsController>(ParrotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
