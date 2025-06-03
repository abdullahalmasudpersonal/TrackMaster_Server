"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRoute = void 0;
const express_1 = require("express");
const device_controller_1 = require("./device.controller");
const router = (0, express_1.Router)();
router.post('/install_device', device_controller_1.DeviceController.installNewDevice);
exports.DeviceRoute = router;
