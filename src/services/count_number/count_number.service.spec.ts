import { Test, TestingModule } from '@nestjs/testing';
import { CountNumberService } from './count_number.service';

describe('CountNumberService', () => {
  let service: CountNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountNumberService],
    }).compile();

    service = module.get<CountNumberService>(CountNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
