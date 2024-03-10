import { Field, ObjectType } from '@nestjs/graphql';
import { Record } from './Records.object';

@ObjectType()
export class FindRecordsObject {
  @Field(() => [Record])
  data?: Record[];

  @Field()
  count?: number;
}
