
const config: any = {
  appId: 'wx01b9c6e5c2f4b7bb',
  tryuseId: "R3dZbb1GEDChBsAdSBRM2E",
  srToken: "bi405d02d0f4ed4dfb", // 有数埋点的 token 
  storeCode: 'vichy',
  env: 'dev',
  bynPathUrl: 'http://test.wef2.top',
  basePathUrl: 'https://wxminiec-dev.ateliercologne.com.cn/api',
  loginUrl: '',
  cartIndex: 2,
  chatboxBtn: true, // 使用启用 智能客服 ， false 表示玄武客服, true表示 智能客服
  imgPathUrl: 'https://res-wxec-unipt.lorealchina.com/prod/',
  tmpIds: {
    orderPaid: "6ydg6_znKYaFE0hy48xD6Aeiu-jXuq4DG9pdIEsO9GQ", // 支付成功通知
    orderSend: "NFy0yRAHlIZB7Rq6bK54t7d__CxKbUCA5epDQ4D4X8o", // 订单发货通知
    orderFinish: "cLur8jpClipX98HwpCTeHRFiACITp7dxG3Fre7_8aqE", // 订单完成通知
    orderApplyReturnGoods: "4w79YDFXs9qltlXPoFg4AqnFM2ah8EvMcI0EM0njVQE", // 申请退货通知
    orderCancel: "4w79YDFXs9qltlXPoFg4AlG678BVY08OpQjxk4uZjLw", // 申请退款通知
    sendCoupon: "vbLm-l1BaT8coEq0L4Ky5y3zRefjDqgxVftiuXrjfK0", // 优惠券发券
    collageStart: "8oN_4_zmBy5SfsmLM16KqFD-ZN2HG3Ch7b0nYlohQ3o", // 拼团开始
    collageEnd: "nTvUOH_DLRk_t1_pg8YMPCqDauB_DiBcSOd1PjE2djU", // 拼团结束
    replenishment: "5_hPmbx6TTNfdf2ykZcew7QL4K7saTafz4M3NmKDd24", // 补货提醒
  },
}
config.loginUrl = `${config.basePathUrl}/loreal-portal/wechat/${config.storeCode}/login/`
export default config

