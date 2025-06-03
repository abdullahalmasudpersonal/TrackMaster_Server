"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const device_route_1 = require("../modules/device/device.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/device',
        route: device_route_1.DeviceRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
