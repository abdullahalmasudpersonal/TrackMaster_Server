import { Router } from 'express';
import { DeviceController } from './device.controller';

const router = Router();

router.post('/install_device', DeviceController.installNewDevice);

export const DeviceRoute = router;
