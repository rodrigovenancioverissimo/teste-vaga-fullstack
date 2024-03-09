import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RecordsResolver {
  @Query(() => [String])
  findRegister() {
    return ['ok'];
  }
}
