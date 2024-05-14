import { Controller, Get, Inject, Param } from '@nestjs/common';
import { controllers } from 'src/constants/controller.constant';
import { service } from 'src/constants/service.constant';
import { CountNumberService } from 'src/services/count_number/count_number.service';

@Controller(controllers.game24)
export class CountNumberController {
    constructor(@Inject(service.count_number) private readonly service: CountNumberService) {}

    @Get(':number')
    getResultCountNumberAll(@Param('number') number: string) {
        let arr = number.split('')
        const nums = arr.map(r => {
            return parseInt(r)
        })
        return this.service.computeNumber(nums)
    }
}
