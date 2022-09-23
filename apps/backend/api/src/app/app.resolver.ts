import { Query, Resolver } from '@nestjs/graphql';

@Resolver('app')
export class AppResolver {
  @Query('test')
  async getData() {
    return 'response from graphql test query';
  }
}
