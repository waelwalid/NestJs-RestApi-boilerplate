import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { GatewayQueryParams } from './dto/gateway-query-params.dto';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) { }

  @Post()
  create(@Body() createGatewayDto: CreateGatewayDto) {
    return this.gatewayService.create(createGatewayDto);
  }

  @Get()
  findAll() {
    return this.gatewayService.findAll();
  }

  @Get(':id')
  findById(@Param() params: GatewayQueryParams) {
    return this.gatewayService.findById(params.id);
  }

  @Patch(':id')
  update(@Param() params: GatewayQueryParams, @Body() updateGatewayDto: UpdateGatewayDto) {
    return this.gatewayService.update(params.id, updateGatewayDto);
  }

  @Delete(':id')
  remove(@Param() params: GatewayQueryParams) {
    return this.gatewayService.remove(params.id);
  }

  @Post(':id/device')
  createDevice(@Param() params: GatewayQueryParams, @Body() createDeviceDto: CreateDeviceDto) {
    return this.gatewayService.createDevice(params.id, createDeviceDto);
  }

  @Delete(':id/device/:deviceId')
  removeDevice(@Param() params: GatewayQueryParams) {
    return this.gatewayService.removeDevice(params.id, params.deviceId);
  }
}
