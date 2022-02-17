import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { GatewayRepository } from './gateway.repository';
import { ObjectId, Types } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class GatewayService {

  constructor(private readonly gatewayRepository: GatewayRepository) { }

  create(createGatewayDto: CreateGatewayDto) {
    return this.gatewayRepository.create(createGatewayDto);
  }

  findAll() {
    return this.gatewayRepository.find({});
  }

  findById(id: ObjectId) {
    return this.gatewayRepository.findById(id)
  }

  update(id: ObjectId, updateGatewayDto: UpdateGatewayDto) {
    return this.gatewayRepository.findOneAndUpdate({ _id: id }, updateGatewayDto);
  }

  remove(id: ObjectId) {
    return this.gatewayRepository.findOneAndDelete(id);
  }

  async createDevice(id: ObjectId, createDeviceDto: CreateDeviceDto) {

    const deviceExist = await this.gatewayRepository.isDeviceExist(id, createDeviceDto.uid);
    if (deviceExist) throw new BadRequestException("Device {UID} already exist in this gateway!");

    const countDevices = await this.gatewayRepository.countDevices({ _id: new Types.ObjectId(id.toString()) });
    if (countDevices >= 10) throw new BadRequestException("You cannot add more than 10 devices!");

    return this.gatewayRepository.findOneAndUpdateNested({ _id: id }, createDeviceDto);
  }

  async removeDevice(id: ObjectId, deviceId: number) {
    return this.gatewayRepository.findOneAndDeleteNested({ _id: id }, { uid: deviceId });
  }

}
