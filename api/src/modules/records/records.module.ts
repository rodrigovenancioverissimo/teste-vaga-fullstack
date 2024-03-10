import { Module } from '@nestjs/common';
import { RecordsResolver } from './records.resolver';
import { FindRecordsService } from './services/find-records/find-records.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [RecordsResolver, FindRecordsService],
})
export class RecordsModule {}
