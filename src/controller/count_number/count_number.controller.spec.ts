import { Test, TestingModule } from '@nestjs/testing';
import { CountNumberController } from './count_number.controller';

describe('CountNumberController', () => {
  let controller: CountNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountNumberController],
    }).compile();

    controller = module.get<CountNumberController>(CountNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
