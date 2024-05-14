import { Module } from '@nestjs/common';
import { service } from 'src/constants/service.constant';
import { CountNumberController } from 'src/controller/count_number/count_number.controller';
import { CountNumberService } from 'src/services/count_number/count_number.service';

@Module({
    controllers: [
        CountNumberController
    ],
    providers: [
        {
            provide: service.count_number,
            useClass: CountNumberService
        }
    ]
})
export class CountNumberModule {}
