import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export const deviceStatus = ["ONLINE", "OFFLINE"];

@Schema({ _id: false, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Device {
 
    @Prop({ required: true, index: true})
    uid: number;

    @Prop({ required: true })
    vendor: string;

    @Prop()
    status: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);