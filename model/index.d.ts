/// <reference path="./api/type.d.ts" />
/// <reference path="../typings/index.d.ts" />

/**
 * 业务接口类型声明
 */
declare namespace Api {
  type StoreCode = "商城标识";
}

/**
 * 公用类型声明
 */
declare namespace Model {
  /** 配置文件 */
  interface IConfig {
    appId: string;
    /** 接口域名 */
    basePathUrl: string;
    /** 商城账号or标识 */
    storeCode: string;
    /** 模板消息id集合 */
    tmpIds: any;
    /** 渠道 */
    channelId: ChannelType;
    /** 小程序名称 */
    accountName: string;
    /** 获取小程序设备信息 */
    getSystemInfoSync: WechatMiniprogram.GetSystemInfoSyncResult;
  }
  /** 通用接口返回对象 */
  interface IResponse<T = any> {
    /** 接口返回数据 */
    data: T;
    /** 接口返回状态码 */
    status: number;
    /** 接口返回状态信息 */
    statusText: string;
    /** 接口Response Header */
    headers: Object;
    /** 接口Request请求总数据 */
    config: any;
    /** 接口返回cookies */
    cookies: Array<string>;
  }
  /** 通用接口返回对象Promise */
  interface IResponsePromise<T = any> extends Promise<IResponse<T>> {}
  /** 自定义Error对象 */
  interface IError {
    /** 自定义错误码 */
    code: string;
    /** 自定义错误信息 */
    message: string;
  }
}

/**
 * 通用接口返回对象Promiset 简称
 */
type MRP<T> = Model.IResponsePromise<T>;
/**
 * 微信Async Api的Promise类型声明 简称
 */
type WXP = WechatApi.IWeAsyncPromise;
/**
 * 微信Async Api的Promise类型声明
 */
declare namespace WechatApi {
  interface IWeAsyncPromise {
    canvasGetImageData: (
      res: WechatMiniprogram.CanvasGetImageDataOption
    ) => any;
    canvasPutImageData: (
      res: WechatMiniprogram.CanvasPutImageDataOption
    ) => any;
    canvasToTempFilePath: (
      res: WechatMiniprogram.CanvasToTempFilePathOption
    ) => any;
    setEnableDebug: (res: WechatMiniprogram.SetEnableDebugOption) => any;
    startAccelerometer: (
      res: WechatMiniprogram.StartAccelerometerOption
    ) => any;
    stopAccelerometer: (res: WechatMiniprogram.StopAccelerometerOption) => any;
    getBatteryInfo: (res: WechatMiniprogram.GetBatteryInfoOption) => any;
    getClipboardData: (res: WechatMiniprogram.GetClipboardDataOption) => any;
    setClipboardData: (res: WechatMiniprogram.SetClipboardDataOption) => any;
    startCompass: (res: WechatMiniprogram.StartCompassOption) => any;
    stopCompass: (res: WechatMiniprogram.StopCompassOption) => any;
    addPhoneContact: (res: WechatMiniprogram.AddPhoneContactOption) => any;
    startGyroscope: (res: WechatMiniprogram.StartGyroscopeOption) => any;
    stopGyroscope: (res: WechatMiniprogram.StopGyroscopeOption) => any;
    startBeaconDiscovery: (
      res: WechatMiniprogram.StartBeaconDiscoveryOption
    ) => any;
    stopBeaconDiscovery: (
      res: WechatMiniprogram.StopBeaconDiscoveryOption
    ) => any;
    getBeacons: (res: WechatMiniprogram.GetBeaconsOption) => any;
    startLocalServiceDiscovery: (
      res: WechatMiniprogram.StartLocalServiceDiscoveryOption
    ) => any;
    stopLocalServiceDiscovery: (
      res: WechatMiniprogram.StopLocalServiceDiscoveryOption
    ) => any;
    startDeviceMotionListening: (
      res: WechatMiniprogram.StartDeviceMotionListeningOption
    ) => any;
    stopDeviceMotionListening: (
      res: WechatMiniprogram.StopDeviceMotionListeningOption
    ) => any;
    getNetworkType: (res: WechatMiniprogram.GetNetworkTypeOption) => any;
    makePhoneCall: (res: WechatMiniprogram.MakePhoneCallOption) => any;
    scanCode: (res: WechatMiniprogram.ScanCodeOption) => any;
    getSystemInfo: (res: WechatMiniprogram.GetSystemInfoOption) => any;
    vibrateShort: (res: WechatMiniprogram.VibrateShortOption) => any;
    vibrateLong: (res: WechatMiniprogram.VibrateLongOption) => any;
    getExtConfig: (res: WechatMiniprogram.GetExtConfigOption) => any;
    chooseLocation: (res: WechatMiniprogram.ChooseLocationOption) => any;
    getLocation: (res: WechatMiniprogram.GetLocationOption) => any;
    openLocation: (res: WechatMiniprogram.OpenLocationOption) => any;
    chooseMessageFile: (res: WechatMiniprogram.ChooseMessageFileOption) => any;
    loadFontFace: (res: WechatMiniprogram.LoadFontFaceOption) => any;
    chooseImage: (res: WechatMiniprogram.ChooseImageOption) => any;
    previewImage: (res: WechatMiniprogram.PreviewImageOption) => any;
    getImageInfo: (res: WechatMiniprogram.GetImageInfoOption) => any;
    saveImageToPhotosAlbum: (
      res: WechatMiniprogram.SaveImageToPhotosAlbumOption
    ) => any;
    compressImage: (res: WechatMiniprogram.CompressImageOption) => any;
    chooseVideo: (res: WechatMiniprogram.ChooseVideoOption) => any;
    saveVideoToPhotosAlbum: (
      res: WechatMiniprogram.SaveVideoToPhotosAlbumOption
    ) => any;
    downloadFile: (res: WechatMiniprogram.DownloadFileOption) => any;
    request: (res: WechatMiniprogram.RequestOption) => any;
    connectSocket: (res: WechatMiniprogram.ConnectSocketOption) => any;
    closeSocket: (res: WechatMiniprogram.CloseSocketOption) => any;
    sendSocketMessage: (res: WechatMiniprogram.SendSocketMessageOption) => any;
    uploadFile: (res: WechatMiniprogram.UploadFileOption) => any;
    login: (res?: WechatMiniprogram.LoginOption) => any;
    checkSession: (res: WechatMiniprogram.CheckSessionOption) => any;
    chooseAddress: (res?: WechatMiniprogram.ChooseAddressOption) => any;
    authorize: (res: WechatMiniprogram.AuthorizeOption) => any;
    addCard: (res: WechatMiniprogram.AddCardOption) => any;
    openCard: (res: WechatMiniprogram.OpenCardOption) => any;
    chooseInvoice: (res: WechatMiniprogram.ChooseInvoiceOption) => any;
    chooseInvoiceTitle: (
      res: WechatMiniprogram.ChooseInvoiceTitleOption
    ) => any;
    getUserInfo: (res: WechatMiniprogram.GetUserInfoOption) => any;
    requestPayment: (res: WechatMiniprogram.RequestPaymentOption) => any;
    getWeRunData: (res?: WechatMiniprogram.GetWeRunDataOption) => any;
    showModal: (res: WechatMiniprogram.ShowModalOption) => any;
    showToast: (res: WechatMiniprogram.ShowToastOption) => any;
    hideToast: (res: WechatMiniprogram.HideToastOption) => any;
    showLoading: (res: WechatMiniprogram.ShowLoadingOption) => any;
    hideLoading: (res: WechatMiniprogram.HideLoadingOption) => any;
    showActionSheet: (res: WechatMiniprogram.ShowActionSheetOption) => any;
    pageScrollTo: (res: WechatMiniprogram.PageScrollToOption) => any;
    startPullDownRefresh: (
      res: WechatMiniprogram.StartPullDownRefreshOption
    ) => any;
    stopPullDownRefresh: (
      res: WechatMiniprogram.StopPullDownRefreshOption
    ) => any;
    setBackgroundColor: (
      res: WechatMiniprogram.SetBackgroundColorOption
    ) => any;
    setBackgroundTextStyle: (
      res: WechatMiniprogram.SetBackgroundTextStyleOption
    ) => any;
    setTabBarBadge: (res: WechatMiniprogram.SetTabBarBadgeOption) => any;
    removeTabBarBadge: (res: WechatMiniprogram.RemoveTabBarBadgeOption) => any;
    showTabBarRedDot: (res: WechatMiniprogram.ShowTabBarRedDotOption) => any;
    hideTabBarRedDot: (res: WechatMiniprogram.HideTabBarRedDotOption) => any;
    showTabBar: (res: WechatMiniprogram.ShowTabBarOption) => any;
    hideTabBar: (res: WechatMiniprogram.HideTabBarOption) => any;
    setTabBarStyle: (res: WechatMiniprogram.SetTabBarStyleOption) => any;
    setTabBarItem: (res: WechatMiniprogram.SetTabBarItemOption) => any;
    setTopBarText: (res: WechatMiniprogram.SetTopBarTextOption) => any;
    saveFile: (res: WechatMiniprogram.WxSaveFileOption) => any;
    openDocument: (res: WechatMiniprogram.OpenDocumentOption) => any;
    getSavedFileList: (res: WechatMiniprogram.WxGetSavedFileListOption) => any;
    getSavedFileInfo: (res: WechatMiniprogram.GetSavedFileInfoOption) => any;
    removeSavedFile: (res: WechatMiniprogram.WxRemoveSavedFileOption) => any;
    getFileInfo: (res: WechatMiniprogram.WxGetFileInfoOption) => any;
    getStorage: (res: WechatMiniprogram.GetStorageOption) => any;
    setStorage: (res: WechatMiniprogram.SetStorageOption) => any;
    removeStorage: (res: WechatMiniprogram.RemoveStorageOption) => any;
    clearStorage: (res: WechatMiniprogram.ClearStorageOption) => any;
    getStorageInfo: (res: WechatMiniprogram.GetStorageInfoOption) => any;
    closeBLEConnection: (
      res: WechatMiniprogram.CloseBLEConnectionOption
    ) => any;
    closeBluetoothAdapter: (
      res: WechatMiniprogram.CloseBluetoothAdapterOption
    ) => any;
    createBLEConnection: (
      res: WechatMiniprogram.CreateBLEConnectionOption
    ) => any;
    getBLEDeviceCharacteristics: (
      res: WechatMiniprogram.GetBLEDeviceCharacteristicsOption
    ) => any;
    getBLEDeviceServices: (
      res: WechatMiniprogram.GetBLEDeviceServicesOption
    ) => any;
    getBluetoothAdapterState: (
      res: WechatMiniprogram.GetBluetoothAdapterStateOption
    ) => any;
    getBluetoothDevices: (
      res: WechatMiniprogram.GetBluetoothDevicesOption
    ) => any;
    getConnectedBluetoothDevices: (
      res: WechatMiniprogram.GetConnectedBluetoothDevicesOption
    ) => any;
    notifyBLECharacteristicValueChange: (
      res: WechatMiniprogram.NotifyBLECharacteristicValueChangeOption
    ) => any;
    openBluetoothAdapter: (
      res: WechatMiniprogram.OpenBluetoothAdapterOption
    ) => any;
    readBLECharacteristicValue: (
      res: WechatMiniprogram.ReadBLECharacteristicValueOption
    ) => any;
    startBluetoothDevicesDiscovery: (
      res: WechatMiniprogram.StartBluetoothDevicesDiscoveryOption
    ) => any;
    stopBluetoothDevicesDiscovery: (
      res: WechatMiniprogram.StopBluetoothDevicesDiscoveryOption
    ) => any;
    writeBLECharacteristicValue: (
      res: WechatMiniprogram.WriteBLECharacteristicValueOption
    ) => any;
    getHCEState: (res: WechatMiniprogram.GetHCEStateOption) => any;
    sendHCEMessage: (res: WechatMiniprogram.SendHCEMessageOption) => any;
    startHCE: (res: WechatMiniprogram.StartHCEOption) => any;
    stopHCE: (res: WechatMiniprogram.StopHCEOption) => any;
    getScreenBrightness: (
      res: WechatMiniprogram.GetScreenBrightnessOption
    ) => any;
    setKeepScreenOn: (res: WechatMiniprogram.SetKeepScreenOnOption) => any;
    setScreenBrightness: (
      res: WechatMiniprogram.SetScreenBrightnessOption
    ) => any;
    connectWifi: (res: WechatMiniprogram.ConnectWifiOption) => any;
    getConnectedWifi: (res: WechatMiniprogram.GetConnectedWifiOption) => any;
    getWifiList: (res: WechatMiniprogram.GetWifiListOption) => any;
    setWifiList: (res: WechatMiniprogram.SetWifiListOption) => any;
    startWifi: (res: WechatMiniprogram.StartWifiOption) => any;
    stopWifi: (res: WechatMiniprogram.StopWifiOption) => any;
    getBackgroundAudioPlayerState: (
      res: WechatMiniprogram.GetBackgroundAudioPlayerStateOption
    ) => any;
    playBackgroundAudio: (
      res: WechatMiniprogram.PlayBackgroundAudioOption
    ) => any;
    pauseBackgroundAudio: (
      res: WechatMiniprogram.PauseBackgroundAudioOption
    ) => any;
    seekBackgroundAudio: (
      res: WechatMiniprogram.SeekBackgroundAudioOption
    ) => any;
    stopBackgroundAudio: (
      res: WechatMiniprogram.StopBackgroundAudioOption
    ) => any;
    getAvailableAudioSources: (
      res: WechatMiniprogram.GetAvailableAudioSourcesOption
    ) => any;
    startRecord: (res: WechatMiniprogram.WxStartRecordOption) => any;
    stopRecord: (res: WechatMiniprogram.WxStopRecordOption) => any;
    setInnerAudioOption: (res: WechatMiniprogram.SetInnerAudioOption) => any;
    playVoice: (res: WechatMiniprogram.PlayVoiceOption) => any;
    pauseVoice: (res: WechatMiniprogram.PauseVoiceOption) => any;
    stopVoice: (res: WechatMiniprogram.StopVoiceOption) => any;
    getSetting: (res?: WechatMiniprogram.GetSettingOption) => any;
    openSetting: (res?: WechatMiniprogram.OpenSettingOption) => any;
    getShareInfo: (res: WechatMiniprogram.GetShareInfoOption) => any;
    hideShareMenu: (res: WechatMiniprogram.HideShareMenuOption) => any;
    showShareMenu: (res: WechatMiniprogram.ShowShareMenuOption) => any;
    updateShareMenu: (res: WechatMiniprogram.UpdateShareMenuOption) => any;
    checkIsSoterEnrolledInDevice: (
      res: WechatMiniprogram.CheckIsSoterEnrolledInDeviceOption
    ) => any;
    checkIsSupportSoterAuthentication: (
      res: WechatMiniprogram.CheckIsSupportSoterAuthenticationOption
    ) => any;
    startSoterAuthentication: (
      res: WechatMiniprogram.StartSoterAuthenticationOption
    ) => any;
    navigateBackMiniProgram: (
      res: WechatMiniprogram.NavigateBackMiniProgramOption
    ) => any;
    navigateToMiniProgram: (
      res: WechatMiniprogram.NavigateToMiniProgramOption
    ) => any;
    setNavigationBarTitle: (
      res: WechatMiniprogram.SetNavigationBarTitleOption
    ) => any;
    showNavigationBarLoading: (
      res: WechatMiniprogram.ShowNavigationBarLoadingOption
    ) => any;
    hideNavigationBarLoading: (
      res: WechatMiniprogram.HideNavigationBarLoadingOption
    ) => any;
    setNavigationBarColor: (
      res: WechatMiniprogram.SetNavigationBarColorOption
    ) => any;
    redirectTo: (res: WechatMiniprogram.RedirectToOption) => any;
    reLaunch: (res: WechatMiniprogram.ReLaunchOption) => any;
    navigateTo: (res: WechatMiniprogram.NavigateToOption) => any;
    switchTab: (res: WechatMiniprogram.SwitchTabOption) => any;
    navigateBack: (res: WechatMiniprogram.NavigateBackOption) => any;
  }
}
