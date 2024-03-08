import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RegisterResolver {
  @Query(() => [String])
  findRegister() {
    return [];
  }
}
