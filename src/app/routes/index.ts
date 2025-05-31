import { Router } from 'express';
import { DeviceRoute } from '../modules/device/device.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/device',
    route: DeviceRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
