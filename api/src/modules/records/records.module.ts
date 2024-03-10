import { Module } from '@nestjs/common';
import { RecordsResolver } from './records.resolver';
import { FindRecords } from './services/find-records/find-records.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [RecordsResolver, FindRecords],
})
export class RecordsModule {}
