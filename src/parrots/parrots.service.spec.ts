import { Test, TestingModule } from '@nestjs/testing';
import { ParrotsService } from './parrots.service';

describe('ParrotsService', () => {
  let service: ParrotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParrotsService],
    }).compile();

    service = module.get<ParrotsService>(ParrotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
