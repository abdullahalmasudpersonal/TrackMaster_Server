import { model, Schema } from 'mongoose';
import { TDevice } from './device.interfact';

const deviceSchema = new Schema<TDevice>(
  {
    deviceId: {
      type: String,
      required: true,
      unique: true,
    },
    deviceName: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    os: {
      type: String,
      required: true,
    },
    osVersion: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
      required: true,
      unique: true,
    },
    batteryLevel: {
      type: Number,
      required: true,
    },
    isCharging: {
      type: Boolean,
      default: false,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Device = model<TDevice>('Device', deviceSchema);