import { ddget } from './http'

// 测试
export const testApi =data => ddget('/cfin/getWuYeCfin',data);
// 物业费
export const getMonthApi =data => ddget('/cfin/getShouldAndCollectedMonth',data);
export const getShouldApi =data => ddget('/cfin/getShouldAndCollected',data);
export const getList =data => ddget('/cfin/getCfinList',data);
// 停车费
export const getParkingToday =data => ddget('/cfin/getCarFees',data);
export const getParkingProgress =data => ddget('/cfin/getCarFeeList',data);
export const getParkingLine =data => ddget('/cfin/getCarCollectedtoday',data);