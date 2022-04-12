

import http from "../axios";
import config from "../../config/index"


const login: Api.Common.Login.FuncT = (path) => http.get<Api.Common.Login.IResponse>(`/loreal-portal/wechat/${config.storeCode}/login/${path.code}`)

const sendSMS: Api.Common.SendSMS.FuncT = (path) => http.post<boolean>(`/loreal-portal/wechat/${config.storeCode}/sendSmsCode/${path.mobile}`)

const findKvDataByType: Api.Common.FindKvDataByType.FuncT = (path) => http.post<Array<Api.Common.FindKvDataByType.IResponse>>(`/loreal-portal/store/${config.storeCode}/config/kvdata/findType/${path.type}`)

const upLoadFile: Api.Common.UpLoadFile.FuncT = (data) => http.upload<string>(`/loreal-portal/store/${config.storeCode}/upload_file`, { filePath: data.filePath })

const createQrCode: Api.Common.CreateQrCode.FuncT = (data) => http.post<string>(`/loreal-portal/wechat/${config.storeCode}/wxa`, data)

const orderPaidCancelSubscribeMsg: Api.Common.OrderPaidCancelSubscribeMsg.FuncT = (path) => http.post<null>(`/loreal-portal/store/${config.storeCode}/message/orderPaidCancelSubscribeMsg/${path.orderId}`)

const ocpa: Api.Common.OCPA.FuncT = (data) => http.post<null>(`/loreal-portal/wechat/${config.storeCode}/ocpa/addUserActions`, data)

const getPoint: any = () => http.get<any>(`/ec-portal/store/${config.storeCode}/buy_now/userPoints`)

export default {
  /** 授权获取用户信息和token */
  login,
  /** 发送短信接口 */
  sendSMS,
  /** 查询配置信息 */
  findKvDataByType,
  /** 文件上传地址(CDN)  */
  upLoadFile,
  /** 创建太阳码 */
  createQrCode,
  /** 订阅消息-取消订单 */
  orderPaidCancelSubscribeMsg,
  /** OCPA */
  ocpa,
  /** 查询积分 */
  getPoint
}


