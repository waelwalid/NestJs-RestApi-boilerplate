import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { randomInt } from "crypto";
import { Document } from 'mongoose';
import { Device, DeviceSchema } from "./device.schema";


export type GatewayDocument = Gateway & Document;


@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Gateway {
 
    @Prop({ required: true, unique: true })
    serialNumber: string;
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    ipv4: string;

    @Prop({ type: [DeviceSchema] })
    devices: Device[]
}

export const GatewaySchema = SchemaFactory.createForClass(Gateway);