export default class actions {
  // 静态常量
  static daycheck: boolean = true;

  // 路由跳转
  static async navigate(url: string, type: string = "navigateTo") {
    if (!type) {
      type = "navigateTo";
    }
    switch (type) {
      case "navigateTo":
        wx.navigateTo({
          url: url,
          fail: () => {
            wx.switchTab({ url: url });
          },
        });
        break;
      case "redirectTo":
        wx.redirectTo({ url });
        break;
      case "switchTab":
        wx.switchTab({ url });
        break;
      case "reLaunch":
        wx.reLaunch({ url });
        break;
    }
  }

  // 返回
  static async back(delta: number) {
    if (!delta) {
      delta = 1;
    }
    wx.navigateBack({ delta });
  }

  // 获取资源后缀
  static async getAssetsType(obj: string) {
    // 获取字符串中.之后的所有字符
    var index = obj.lastIndexOf(".");
    obj = obj.substring(index + 1, obj.length);
    return obj;
  }

  // 已知宽高获取图片相对于屏幕的高度使得自适应
  static async getMediaHeight(obj: AnyObject, targetWidth = 750) {
    let ratio = obj.width / obj.height;
    let targetHeight = targetWidth / ratio;
    return (targetHeight + 2).toFixed(2);
  }

  // 分享商品
  static async shareEvent(option: AnyObject, obj: AnyObject) {
    let shareObj = {
      title: obj.title,
      path: obj.path,
      imgUrl: obj.imgUrl,
      success(res) {
        // 转发成功之后的回调
        if (res.errMsg == "shareAppMessage:ok") {
        }
      },
      fail(res) {
        // 转发失败之后的回调
        if (res.errMsg == "shareAppMessage:fail cancel") {
          // 用户取消转发
        } else if (res.errMsg == "shareAppMessage:fail") {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete() {
        // 转发结束之后的回调（转发成不成功都会执行）
      },
    };
    if (option.from === "button") {
      // 来自页面内转发按钮
      console.log(option.target);
    }
    return shareObj;
  }
  // 计算机购物车商品数量
  static async getCartNumber(cart: AnyObject) {
    if (cart.goods) {
      return cart.goods
        .map((item) => item.quantity)
        .reduce((pre, cur) => pre + cur);
    } else {
      console.log("购物车对象格式不正确");
      return 0;
    }
  }

  // 获取当前页面路径
  static async getCurrentPageUrl() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const url = `/${currentPage.route}`;
    return url;
  }

  // 过滤表情
  static async regStrFn(str: string) {
    let reg =
      /([^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n])|(\s)/g;
    let indexArr = reg.exec(str);
    if (str.match(reg)) {
      str = str.replace(reg, "");
    }
    let obj = {
      val: str,
      index: indexArr,
    };
    return obj;
  }

  // 选择图片
  static async chooseImgs(sets, success, fail, complete) {
    if (!sets.count) {
      sets.count = 1;
    }
    if (!sets.sizeType) {
      sets.sizeType = ["original", "compressed"];
    }
    if (!sets.sourceType) {
      sets.sourceType = ["album", "camera"];
    }
    wx.chooseImage({
      count: sets.count, //默认9
      sizeType: sets.sizeType, //可以指定是原图还是压缩图，默认二者都有
      sourceType: sets.sourceType, //从相册选择
      success: (res) => {
        success(res.tempFilePaths);
      },
      fail: (e) => {
        if (fail) {
          fail(e);
        }
      },
      complete: (e) => {
        if (complete) {
          complete(e);
        }
      },
    });
  }

  // 获取图片信息
  static async getImageInfo(imgUrl, success, fail, complete) {
    wx.getImageInfo({
      src: imgUrl,
      success: function (info) {
        success(info);
      },
      fail: (e) => {
        if (fail) {
          fail(e);
        }
      },
      complete: (e) => {
        if (complete) {
          complete(e);
        }
      },
    });
  }

  // 预览图片
  static async previewImage(items, currentImg) {
    wx.previewImage({ urls: items, current: currentImg });
  }

  // 获取设备信息
  static async system() {
    try {
      var res = wx.getSystemInfoSync();
      res.model = res.model.replace(" ", "");
      res.model = res.model.toLowerCase();
      if (
        res.model.indexOf("iphonex") != -1 ||
        res.model.indexOf("iphone11") != -1
      ) {
        console.log("非IOS 11");
      } else {
        console.log("是IOS 11");
      }
      return res;
    } catch (e) {
      return null;
    }
  }

  // 点击搜索框-先判断搜索词有无搜索结果,有结果再跳转搜索结果页
  static async confirmClick(inputValue: string) {
    const serarchWord = this.regStrFn(inputValue);
    this.navigate(`/pages/search/result/index?keyword=${serarchWord}`);
  }
}
