"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const mongoose_1 = require("mongoose");
const deviceSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.Device = (0, mongoose_1.model)('Device', deviceSchema);
