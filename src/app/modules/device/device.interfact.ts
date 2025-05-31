export interface TDevice {
  deviceId: string;
  deviceName: string;
  model: string;
  manufacturer: String;
  os: String;
  osVersion: String;
  ipAddress: String;
  batteryLevel: Number;
  isCharging: Boolean;
  isOnline: Boolean;
}
