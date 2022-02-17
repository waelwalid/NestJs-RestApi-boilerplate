import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GatewayController } from './gateway.controller';
import { Gateway, GatewaySchema } from "./schemas/gateway.schema";
import { GatewayRepository } from "./gateway.repository";
import { GatewayService } from './gateway.service';
import { Device, DeviceSchema } from './schemas/device.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: Gateway.name, schema: GatewaySchema },
      { name: Device.name, schema: DeviceSchema }
    ])
  ],
  controllers: [GatewayController],
  providers: [GatewayService , GatewayRepository]
})
export class GatewayModule {}
