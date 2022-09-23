import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';

import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot({ ...environment.connection })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
