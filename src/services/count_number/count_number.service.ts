import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { service } from 'src/constants/service.constant';
import { ConnectDbService } from '../connect-db/connect-db.service';
import { SearchNumber } from 'prisma/src/prisma/client';

@Injectable()
export class CountNumberService {
    constructor(@Inject(service.connect_db)private readonly db: ConnectDbService) {}
    
    async findAll(): Promise<SearchNumber[]> {
        try {
            const result = await this.db.searchNumber.findMany()
            return result
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    findById(id: string): Promise<SearchNumber | null> {
        try {
            return this.db.searchNumber.findFirst({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    create(item: SearchNumber): Promise<SearchNumber> {
        try {
            return this.db.searchNumber.create({
                data: item
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    update(id: string, item: Partial<SearchNumber>): Promise<SearchNumber> {
        try {
            return this.db.searchNumber.update({
                where: {
                    id: id
                },
                data: item
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    findByNumber(number: string): Promise<SearchNumber[]> {
        try {
            return this.db.searchNumber.findMany({
                where:{
                    key_value: number
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    sumNumber(num: number[]): string {
        const permutations = this.permute(num);
    
        for (const perm of permutations) {
            const [a, b, c, d] = perm;
    
            for (const op1 of ['+', '-', '*', '/']) {
                for (const op2 of ['+', '-', '*', '/']) {
                    for (const op3 of ['+', '-', '*', '/']) {
                        const eq = `((${a} ${op1} ${b}) ${op2} ${c}) ${op3} ${d}`;
                        if (eval(eq) === 24) {
                            return eq;
                        }
                    }
                }
            }
        }
    
        return "ไม่พบสมการที่ให้ผลลัพธ์เป็น 24";
    }
    
    permute(ts: number[]): number[][] {
        const result: number[][] = [];
    
        const permuteHelper = (arr: number[], m: number[] = []) => {
            if (arr.length === 0) {
                result.push(m);
            } else {
                for (let i = 0; i < arr.length; i++) {
                    const curr = arr.slice();
                    const next = curr.splice(i, 1);
                    permuteHelper(curr.slice(), m.concat(next));
                }
            }
        };
    
        permuteHelper(ts);
    
        return result;
    }

    async computeNumber(number: number[]) {        
        try {
            let tranferNuber = number.join('')
            const findNumber = await this.findByNumber(tranferNuber)            
            if(findNumber.length === 0) {
                const result = await this.sumNumber(number)
                const s = {} as SearchNumber
                if(result.includes("ไม่พบสมการที่ให้ผลลัพธ์เป็น 24")) {
                    s.count_unit = "ไม่พบสมการที่ให้ผลลัพธ์เป็น 24"
                    s.compite_result = false
                    s.key_value = tranferNuber
                    const create = await this.create(s)
                    return create
                }
                s.count_unit = result
                s.key_value = tranferNuber
                s.compite_result = true
                const create = await this.create(s)    
                return create          
            }
            else{
                return findNumber[0]
            }
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}
