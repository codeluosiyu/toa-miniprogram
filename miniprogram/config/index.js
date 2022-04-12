var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var accountName = '法国薇姿官方商城';
var channelId = 'wm';
var getSystemInfoSync = wx.getSystemInfoSync();
var appId = __wxConfig.accountInfo.appId;
import proObj from './pro';
import devObj from './dev';
var publicMsg = {
    channelId: channelId,
    accountName: accountName,
    getSystemInfoSync: getSystemInfoSync,
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
        "400038", "2010", "8040040", "8040050"
    ],
    collageParams: {
        type: "create",
        activitiId: "",
        launchInfoId: "",
        skuid: "",
        locate: {}
    },
};
var dev = __assign(__assign(__assign({}, devObj), publicMsg), { loginUrl: devObj.basePathUrl + "/loreal-portal/wechat/" + devObj.storeCode + "/login/" });
var pro = __assign(__assign(__assign({}, proObj), publicMsg), { loginUrl: proObj.basePathUrl + "/loreal-portal/wechat/" + proObj.storeCode + "/login/" });
var config = pro;
if (appId == 'wx01b9c6e5c2f4b7bb') {
    config = dev;
}
else if (appId == 'wxed59a0e7a6b8dde9') {
    config = pro;
}
export default config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQTtBQUM5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUE7QUFDdEIsSUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtBQUNoRCxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQTtBQUMxQyxPQUFPLE1BQU0sTUFBTSxPQUFPLENBQUE7QUFDMUIsT0FBTyxNQUFNLE1BQU0sT0FBTyxDQUFBO0FBRTFCLElBQUksU0FBUyxHQUFHO0lBQ2QsU0FBUyxXQUFBO0lBQ1QsV0FBVyxhQUFBO0lBQ1gsaUJBQWlCLG1CQUFBO0lBQ2pCLFVBQVUsRUFBRTtRQUNWLG1CQUFtQixFQUFFO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxhQUFhLEVBQUUsRUFBRTtRQUNqQixTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUNELFlBQVksRUFBRTtRQUNaLGlCQUFpQixFQUFFLEVBQUU7UUFDckIsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixTQUFTLEVBQUUsSUFBSTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELGNBQWMsRUFBRTtRQUNkLGlCQUFpQixFQUFFLEVBQUU7UUFDckIsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixTQUFTLEVBQUUsSUFBSTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELGVBQWUsRUFBRTtRQUNmLG1CQUFtQixFQUFFLEVBQUU7UUFDdkIsd0JBQXdCLEVBQUUsRUFBRTtRQUM1QixTQUFTLEVBQUUsSUFBSTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELFdBQVcsRUFBRTtRQUNYLFFBQVEsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFNBQVM7S0FDcEM7SUFFRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRSxFQUFFO1FBQ2QsWUFBWSxFQUFFLEVBQUU7UUFDaEIsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtLQUNYO0NBQ0YsQ0FBQTtBQUVELElBQU0sR0FBRyxrQ0FDSixNQUFNLEdBQ04sU0FBUyxLQUNaLFFBQVEsRUFBSyxNQUFNLENBQUMsV0FBVyw4QkFBeUIsTUFBTSxDQUFDLFNBQVMsWUFBUyxHQUNsRixDQUFBO0FBRUQsSUFBTSxHQUFHLGtDQUNKLE1BQU0sR0FDTixTQUFTLEtBQ1osUUFBUSxFQUFLLE1BQU0sQ0FBQyxXQUFXLDhCQUF5QixNQUFNLENBQUMsU0FBUyxZQUFTLEdBQ2xGLENBQUE7QUFFRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUE7QUFDaEIsSUFBSSxLQUFLLElBQUksb0JBQW9CLEVBQUU7SUFDakMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtDQUNiO0tBQU0sSUFBSSxLQUFLLElBQUksb0JBQW9CLEVBQUU7SUFDeEMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtDQUNiO0FBRUQsZUFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY2NvdW50TmFtZSA9ICfms5Xlm73oloflp7/lrpjmlrnllYbln44nXHJcbmNvbnN0IGNoYW5uZWxJZCA9ICd3bSdcclxuY29uc3QgZ2V0U3lzdGVtSW5mb1N5bmMgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpXHJcbmNvbnN0IGFwcElkID0gX193eENvbmZpZy5hY2NvdW50SW5mby5hcHBJZFxyXG5pbXBvcnQgcHJvT2JqIGZyb20gJy4vcHJvJ1xyXG5pbXBvcnQgZGV2T2JqIGZyb20gJy4vZGV2J1xyXG5cclxubGV0IHB1YmxpY01zZyA9IHtcclxuICBjaGFubmVsSWQsXHJcbiAgYWNjb3VudE5hbWUsXHJcbiAgZ2V0U3lzdGVtSW5mb1N5bmMsXHJcbiAgY2FydFBhcmFtczoge1xyXG4gICAgY3VzdG9tUG9pbnRzUGF5UGxhbjoge1xyXG4gICAgICB1c2VQb2ludHM6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY291cG9uczogW10sXHJcbiAgICBwcm9tb3Rpb25Db2RlOiBcIlwiLFxyXG4gICAgdXNlQ291cG9uOiB0cnVlLFxyXG4gIH0sXHJcbiAgdHJ5dXNlUGFyYW1zOiB7XHJcbiAgICBidXlHaWZ0QWN0aXZpdHlJZDogXCJcIixcclxuICAgIGJ1eUdpZnRBY3Rpdml0eUdyb3VwSWQ6IFwiXCIsXHJcbiAgICBjaGFubmVsSWQ6IFwid21cIixcclxuICAgIGN1c3RvbUluZm9zOiBbXSxcclxuICAgIGl0ZW1zOiBbXVxyXG4gIH0sXHJcbiAgd2lzaExpc3RQYXJhbXM6IHtcclxuICAgIGJ1eUdpZnRBY3Rpdml0eUlkOiBcIlwiLFxyXG4gICAgYnV5R2lmdEFjdGl2aXR5R3JvdXBJZDogXCJcIixcclxuICAgIGNoYW5uZWxJZDogXCJ3bVwiLFxyXG4gICAgY3VzdG9tSW5mb3M6IFtdLFxyXG4gICAgaXRlbXM6IFtdXHJcbiAgfSxcclxuICBidWxrT3JkZXJQYXJhbXM6IHtcclxuICAgIGtleUNsaWVudEFjdGl2aXR5SWQ6IFwiXCIsXHJcbiAgICBrZXlDbGllbnRBY3Rpdml0eUdyb3VwSWQ6IFwiXCIsXHJcbiAgICBjaGFubmVsSWQ6IFwid21cIixcclxuICAgIGN1c3RvbUluZm9zOiBbXSxcclxuICAgIGl0ZW1zOiBbXVxyXG4gIH0sXHJcbiAgZXJyQ29kZUxpc3Q6IFtcclxuICAgIFwiNDAwMDM4XCIsXCIyMDEwXCIsXCI4MDQwMDQwXCIsXCI4MDQwMDUwXCJcclxuICBdLFxyXG4gIC8vIDQwMDAzOFxyXG4gIGNvbGxhZ2VQYXJhbXM6IHtcclxuICAgIHR5cGU6IFwiY3JlYXRlXCIsIC8vIOW8gOWbomNyZWF0ZSDlj4Llm6Jqb2luXHJcbiAgICBhY3Rpdml0aUlkOiBcIlwiLFxyXG4gICAgbGF1bmNoSW5mb0lkOiBcIlwiLFxyXG4gICAgc2t1aWQ6IFwiXCIsXHJcbiAgICBsb2NhdGU6IHt9XHJcbiAgfSxcclxufVxyXG5cclxuY29uc3QgZGV2OiBNb2RlbC5JQ29uZmlnID0ge1xyXG4gIC4uLmRldk9iaixcclxuICAuLi5wdWJsaWNNc2csXHJcbiAgbG9naW5Vcmw6IGAke2Rldk9iai5iYXNlUGF0aFVybH0vbG9yZWFsLXBvcnRhbC93ZWNoYXQvJHtkZXZPYmouc3RvcmVDb2RlfS9sb2dpbi9gXHJcbn1cclxuXHJcbmNvbnN0IHBybzogTW9kZWwuSUNvbmZpZyA9IHtcclxuICAuLi5wcm9PYmosXHJcbiAgLi4ucHVibGljTXNnLFxyXG4gIGxvZ2luVXJsOiBgJHtwcm9PYmouYmFzZVBhdGhVcmx9L2xvcmVhbC1wb3J0YWwvd2VjaGF0LyR7cHJvT2JqLnN0b3JlQ29kZX0vbG9naW4vYFxyXG59XHJcblxyXG5sZXQgY29uZmlnID0gcHJvXHJcbmlmIChhcHBJZCA9PSAnd3gwMWI5YzZlNWMyZjRiN2JiJykge1xyXG4gIGNvbmZpZyA9IGRldlxyXG59IGVsc2UgaWYgKGFwcElkID09ICd3eGVkNTlhMGU3YTZiOGRkZTknKSB7XHJcbiAgY29uZmlnID0gcHJvXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xyXG4iXX0=