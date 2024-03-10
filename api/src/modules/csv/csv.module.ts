import { Module } from '@nestjs/common';
import { CsvResolver } from './csv.resolver';
import { ImportFromCsvService } from './services/import-from-csv/import-from-csv.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CsvResolver, ImportFromCsvService],
})
export class CsvModule {}
