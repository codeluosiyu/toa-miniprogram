const accountName = '法国薇姿官方商城'
const channelId = 'wm'
const getSystemInfoSync = wx.getSystemInfoSync()
const appId = __wxConfig.accountInfo.appId
import proObj from './pro'
import devObj from './dev'

let publicMsg = {
  channelId,
  accountName,
  getSystemInfoSync,
  cartParams: {
    customPointsPayPlan: {
      usePoints: false
    },
    coupons: [],
    promotionCode: "",
    useCoupon: true,
  },
  tryuseParams: {
    buyGiftActivityId: "",
    buyGiftActivityGroupId: "",
    channelId: "wm",
    customInfos: [],
    items: []
  },
  wishListParams: {
    buyGiftActivityId: "",
    buyGiftActivityGroupId: "",
    channelId: "wm",
    customInfos: [],
    items: []
  },
  bulkOrderParams: {
    keyClientActivityId: "",
    keyClientActivityGroupId: "",
    channelId: "wm",
    customInfos: [],
    items: []
  },
  errCodeList: [
    "400038","2010","8040040","8040050"
  ],
  // 400038
  collageParams: {
    type: "create", // 开团create 参团join
    activitiId: "",
    launchInfoId: "",
    skuid: "",
    locate: {}
  },
}

const dev: Model.IConfig = {
  ...devObj,
  ...publicMsg,
  loginUrl: `${devObj.basePathUrl}/loreal-portal/wechat/${devObj.storeCode}/login/`
}

const pro: Model.IConfig = {
  ...proObj,
  ...publicMsg,
  loginUrl: `${proObj.basePathUrl}/loreal-portal/wechat/${proObj.storeCode}/login/`
}

let config = pro
if (appId == 'wx01b9c6e5c2f4b7bb') {
  config = dev
} else if (appId == 'wxed59a0e7a6b8dde9') {
  config = pro
}

export default config
