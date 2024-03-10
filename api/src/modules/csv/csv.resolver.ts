import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ImportFromCsvService } from './services/import-from-csv/import-from-csv.service';

@Resolver()
export class CsvResolver {
  constructor(private readonly importFromCsvService: ImportFromCsvService) {}
  @Mutation(() => String)
  async importFromCsv(@Args('file') file: string) {
    await this.importFromCsvService.run(file);
    return 'CSV importado com sucesso!';
  }
}
