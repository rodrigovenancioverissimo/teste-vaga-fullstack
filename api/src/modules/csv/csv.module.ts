import { Module } from '@nestjs/common';
import { CsvResolver } from './csv.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [CsvResolver],
})
export class CsvModule {}
