import { Body, Controller, Delete, Get, Inject, Param, Put } from '@nestjs/common';
import { SearchNumber } from 'prisma/src/prisma/client';
import { controllers } from 'src/constants/controller.constant';
import { service } from 'src/constants/service.constant';
import { CountNumberService } from 'src/services/count_number/count_number.service';

@Controller(controllers.game24)
export class CountNumberController {
    constructor(@Inject(service.count_number) private readonly service: CountNumberService) {}

    @Get(':number')
    getComputeNumber(@Param('number') number: string) {
        return this.service.computeNumber(number)
    }

    @Get()
    getResultCountNumberAll() {
        return this.service.findAll()
    }
    @Put(':id')
    editResultCountNumber(@Param('id') id: string, @Body() item: SearchNumber) {
        return this.service.update(id, item)
    }

    @Delete(':id')
    deleteResultCountNumber(@Param('id') id: string) {
        return this.deleteResultCountNumber(id)
    }
}
