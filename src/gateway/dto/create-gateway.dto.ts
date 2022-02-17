import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsUUID,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
    MaxLength,
    ValidateNested,
    IsIP,
    IsMongoId
} from 'class-validator';
import { CreateDeviceDto } from './create-device.dto';


export class CreateGatewayDto {
    
    @IsMongoId()
    @IsOptional()
    _id?: string

    @ApiProperty({
        description: `Unique serial number(uuid)`,
        example: `e152f810-a2eb-4ef0-a131-108f42835c88`,
    })
    @IsNotEmpty()
    @IsUUID()
    serialNumber: string;

    @ApiProperty({
        description: `String name`,
        example: `Gateway name`,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(0)
    @MaxLength(25)
    name: string;

    @ApiProperty({
        description: `String IPv4 for a Gatway`,
        example: `127.0.0.1`,
    })
    @IsIP("4")
    @IsString()
    @IsNotEmpty()
    ipv4: string;

    @ApiProperty({
        description: `Max:10 records | Optional Nested Array of objects contains devices`,
        example: `[{
            "uid" : 10, 
            "vendor" : "microsoft",
            "status" : "ONLINE"
         }]`,
    })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateDeviceDto)
    devices: CreateDeviceDto[]
}




