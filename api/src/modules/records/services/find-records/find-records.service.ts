import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { FindRecordsArgs } from '../../gql/FindRecords.args';
import { Prisma } from '@prisma/client';

const take = 20;
@Injectable()
export class FindRecordsService {
  constructor(private readonly prisma: PrismaService) {}

  async run(args?: FindRecordsArgs) {
    const where: Prisma.RecordsWhereInput = {
      nrCpfCnpj: { contains: args?.nrCpfCnpj },
      nmClient: { contains: args?.nmClient, mode: 'insensitive' },
    };

    const skip = ((args?.page || 1) - 1) * take;

    const orderBy: Prisma.RecordsOrderByWithRelationInput = args.orderBy
      ? {
          [args.orderBy]: 'asc',
        }
      : undefined;

    return {
      data: this.prisma.records.findMany({ where, take, skip, orderBy }),
      count: this.prisma.records.count({ where }),
    };
  }
}
