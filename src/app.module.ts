import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsFilter } from "./exceptions/exception.filter"
import { BadRequestExceptionFilter } from './exceptions/bad-exception.filter';

@Module({
  imports: [
    GatewayModule,
    MongooseModule.forRoot('mongodb://root_user:root_pass@172.16.238.3:27017/gateway_db')],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: ExceptionsFilter,
  },
  {
    provide: APP_FILTER,
    useClass: BadRequestExceptionFilter,
  }],
})
export class AppModule { }
