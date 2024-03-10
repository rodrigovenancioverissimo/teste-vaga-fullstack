import { Query, Resolver } from '@nestjs/graphql';
import { FindRecords } from './services/find-records/find-records.service';
import { Record } from './Records';

@Resolver()
export class RecordsResolver {
  constructor(private readonly findRecordsService: FindRecords) {}

  @Query(() => [Record])
  findRegister() {
    return this.findRecordsService.run();
  }
}
