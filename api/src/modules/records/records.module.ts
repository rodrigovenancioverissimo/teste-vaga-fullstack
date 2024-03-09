import { Module } from '@nestjs/common';
import { RecordsResolver } from './records.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [RecordsResolver],
})
export class RecordsModule {}
