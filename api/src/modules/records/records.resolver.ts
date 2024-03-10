import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindRecordsService } from './services/find-records/find-records.service';
import { FindRecordsArgs } from './gql/FindRecords.args';
import { FindRecordsObject } from './gql/FindRecords.object';

@Resolver()
export class RecordsResolver {
  constructor(private readonly findRecordsService: FindRecordsService) {}

  @Query(() => FindRecordsObject)
  findRegister(@Args() args: FindRecordsArgs) {
    return this.findRecordsService.run(args);
  }
}
