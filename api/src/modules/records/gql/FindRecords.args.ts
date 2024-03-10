import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FindRecordsArgs {
  @Field({ nullable: true })
  page?: number;

  @Field({ nullable: true })
  nrCpfCnpj?: string;
}
