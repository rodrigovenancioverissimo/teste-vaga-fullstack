import { Module } from '@nestjs/common';
import { RegisterResolver } from './register.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [RegisterResolver],
})
export class RegisterModule {}
