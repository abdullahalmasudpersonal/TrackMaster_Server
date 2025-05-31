import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { DeviceService } from './device.service';

const installNewDevice = catchAsync(async (req, res) => {
  const result = await DeviceService.installNewDeviceIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Member Created Successfully',
    data: result,
  });
});

export const DeviceController = {
  installNewDevice,
};
