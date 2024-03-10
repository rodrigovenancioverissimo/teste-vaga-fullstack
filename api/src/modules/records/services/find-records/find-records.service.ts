import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class FindRecords {
  constructor(private readonly prisma: PrismaService) {}

  async run() {
    return this.prisma.records.findMany();
  }
}
