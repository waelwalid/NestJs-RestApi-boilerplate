import { Test } from '@nestjs/testing';
import { CreateDeviceDto } from './dto/create-device.dto';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { GatewayRepository } from './gateway.repository';
import { GatewayService } from './gateway.service';
import { Types } from 'mongoose';
import { BadRequestException } from '@nestjs/common';

describe('Testing Gateway service', () => {
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
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [
                GatewayService,
                {
                    provide: GatewayRepository,
                    useValue: {
                        create: () => {
                            return createGatewayDto;
                        },
                        find: () => {
                            return [
                                createGatewayDto
                            ];
                        },
                        findOneAndUpdate: (id, createGatewayDto) => {
                            return createGatewayDto;
                        },
                        findById: (id) => {
                            return createGatewayDto;
                        },
                        findOneAndDelete(id) {
                            return createGatewayDto;
                        },
                        findOneAndUpdateNested: (id, createDeviceDto) => {
                            return createGatewayDto;
                        },
                        findOneAndDeleteNested: (id, createDeviceDto) => {
                            return createGatewayDto;
                        },
                        isDeviceExist: (gatewayId, deviceId) => {
                            return false
                        },
                        countDevices: () => {
                            return 1
                        }
                    }
                }

            ],
        }).compile();

        gatewayService = moduleRef.get<GatewayService>(GatewayService);
        gatewayRepository = moduleRef.get<GatewayRepository>(GatewayRepository);
    });

    it('should be defined', () => {
        expect(gatewayService).toBeDefined();
    });

    it('create fn', async () => {
        expect(await gatewayService.create(createGatewayDto)).toEqual(createGatewayDto);
    });
    it('findAll fn', async () => {
        expect(await gatewayService.findAll()).toEqual([createGatewayDto]);
    });

    it('update fn', async () => {
        expect(await gatewayService.update(_id, createGatewayDto)).toEqual(createGatewayDto);
    });
    it('findById fn', async () => {
        expect(await gatewayService.findById(_id)).toEqual(createGatewayDto);
    });
    it('remove fn', async () => {
        expect(await gatewayService.remove(_id)).toEqual(createGatewayDto);
    });
    it('createDevice fn', async () => {
        expect(await gatewayService.createDevice(_id, createDeviceDto)).toEqual(createGatewayDto);
    });
    it('createDevice fn: it does not create device if there is 10 devices already', async () => {
        jest
        .spyOn(gatewayRepository, 'countDevices')
        .mockImplementation(() => Promise.resolve(11));
        expect(gatewayService.createDevice(_id, createDeviceDto)).rejects.toThrow(BadRequestException);
    });
    it('createDevice fn: it does not create device if device uid already exists', async () => {
        jest
        .spyOn(gatewayRepository, 'isDeviceExist')
        .mockImplementation(() => Promise.resolve(true));
        expect(gatewayService.createDevice(_id, createDeviceDto)).rejects.toThrow(BadRequestException);
    });
    it('removeDevice fn', async () => {
        expect(await gatewayService.removeDevice(_id, createDeviceDto.uid)).toEqual(createGatewayDto);
    });

});
