import { Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class CsvResolver {
  @Mutation(() => String)
  importFromCsv() {
    return 'ok';
  }
}
