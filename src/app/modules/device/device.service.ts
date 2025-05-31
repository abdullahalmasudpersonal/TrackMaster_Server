import { Request } from 'express';
import { Device } from './device.model';

const installNewDeviceIntoDB = async (req: Request) => {
  return await Device.create(req?.body);
};

export const DeviceService = {
  installNewDeviceIntoDB,
};
