import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FindRecordsArgs {
  @Field({ nullable: true })
  page?: number;

  @Field({ nullable: true })
  nrCpfCnpj?: string;

  @Field({ nullable: true })
  nmClient?: string;

  @Field({ nullable: true })
  orderBy?: string;
}
