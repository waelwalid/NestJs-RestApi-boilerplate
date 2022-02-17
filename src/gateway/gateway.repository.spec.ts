import { Test } from '@nestjs/testing';
import { CreateDeviceDto } from './dto/create-device.dto';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { GatewayRepository } from './gateway.repository';
import { GatewayService } from './gateway.service';
import { Types } from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Gateway } from './schemas/gateway.schema';

type GatewayModelMock = {
    create: jest.Mock,
    findById: jest.Mock,
    find: jest.Mock,
    findOneAndUpdate: jest.Mock,
    findByIdAndDelete: jest.Mock,
    aggregate: jest.Mock,
    findOne: jest.Mock
};

describe('Testing Gateway service', () => {
    let gatewayModelMock: GatewayModelMock;
    let gatewayService: GatewayService;
    let createGatewayDto: CreateGatewayDto;
    let createDeviceDto: CreateDeviceDto;
    let gatewayRepository: GatewayRepository;
    let _id: any;
    beforeEach(async () => {
        createDeviceDto = {
            uid: 123,
            vendor: "test vendor",
            status: "ONLINE"
        }
        createGatewayDto = {
            serialNumber: "e152f810-a2eb-4ef0-a131-108f42835c81",
            name: "device1",
            ipv4: "127.0.0.1",
            devices: [createDeviceDto]

        };
        _id = new Types.ObjectId('620abe05467213d109e806c1');
        const module = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [
                GatewayRepository,
                {
                    provide: getModelToken(Gateway.name),
                    useValue: {
                        create: jest.fn(() => createGatewayDto),
                        findById: jest.fn(() => createGatewayDto),
                        find: jest.fn(() => [createGatewayDto]),
                        findOneAndUpdate: jest.fn(() => createGatewayDto),
                        findByIdAndDelete: jest.fn(() => createGatewayDto),
                        aggregate: jest.fn(() => [{ deviceCount: 1 }]),
                        findOne: jest.fn(() => createGatewayDto)
                    },
                },

            ],
        }).compile();
        gatewayRepository = module.get(GatewayRepository);
        gatewayModelMock = module.get(getModelToken(Gateway.name));
    });

    it('should be defined', () => {
        expect(gatewayRepository).toBeDefined();
    });

    it('create fn', async () => {
        expect(await gatewayRepository.create(createGatewayDto)).toEqual(createGatewayDto);
    });
    it('find fn', async () => {
        expect(await gatewayRepository.find({})).toEqual([createGatewayDto]);
    });
    it('findOneAndUpdate fn', async () => {
        expect(await gatewayRepository.findOneAndUpdate({ _id }, createGatewayDto)).toEqual(createGatewayDto);
    });
    it('findById fn', async () => {
        expect(await gatewayRepository.findById(_id)).toEqual(createGatewayDto);
    });
    it('findOneAndDelete fn', async () => {
        expect(await gatewayRepository.findOneAndDelete(_id)).toEqual(createGatewayDto);
    });
    it('findOneAndDeleteNested fn', async () => {
        expect(await gatewayRepository.findOneAndDeleteNested(_id, createDeviceDto)).toEqual(createGatewayDto);
    });
    it('findOneAndUpdateNested fn', async () => {
        expect(await gatewayRepository.findOneAndUpdateNested(_id, createDeviceDto)).toEqual(createGatewayDto);
    });
    it('countDevices fn', async () => {
        expect(await gatewayRepository.countDevices({ _id })).toEqual(1);
    });
    it('countDevices fn: if no gateway with given _id (empty array) it should return 0', async () => {
        gatewayModelMock.aggregate.mockReturnValue([]);
        expect(await gatewayRepository.countDevices({ _id })).toEqual(0);
    });
    it('countDevices fn: if no gateway with given _id (null) it should return 0', async () => {
        gatewayModelMock.aggregate.mockReturnValue(null);
        expect(await gatewayRepository.countDevices({ _id })).toEqual(0);
    });
    it('isDeviceExist fn', async () => {
        expect(await gatewayRepository.isDeviceExist(_id, createDeviceDto.uid)).toEqual(true);
    });
    it('isDeviceExist fn: if no device it should return false', async () => {
        gatewayModelMock.findOne.mockReturnValue(null);
        expect(await gatewayRepository.isDeviceExist(_id, createDeviceDto.uid)).toEqual(false);
    });

});
