export const formatTime = ({
  date,
  onlyYear = false,
  space = '-',
  monthDay = false,
}: {
  date: Date
  onlyYear?: boolean
  monthDay?: boolean
  space?: string
}) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  if (monthDay) {
    return `${month}月${day}日`
  }
  return [year, month, day].map(formatNumber).join(space) + (onlyYear ? '' : ' ' + [hour, minute, second].map(formatNumber).join(':'))
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
/** 防抖 */
export const debounce = function (fn: Function, debTime: number) {
  let timer: any = null;
  return function (this: any, ...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply((this), args);
      timer = null;
    }, debTime)
  }
}

/** 节流 */
export const throttle = function (fn: Function, rateTime: number) {
  let timer: any = null
  return function (this: any, ...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null;
      }, rateTime)
    }
  }
}

/** 过滤表情 */
export const filterEmoji = (name) => {
  const str = name.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig, "");
  return str;
}

/** 验证税号 */
export const isNumber = (num: string) => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(num)

/** 验证手机号 */
export const isPhone = (phone: any) => /^[1][0-9]{10}$/.test(phone)

/** 验证邮箱 */
export const isEmail = (email: string) => /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email)

/** 时间格式化-带时区 */
export const formatDateTime = (date: string, num: number = 3, interval: string = '-') => {
  const arr = date.split("T");
  const d = arr[0];
  const darr = d.split('-');
  const t = arr[1];
  const tarr = t.split('+');
  const marr = tarr[0].split(':');
  const tzone = Number(tarr[1].substr(0, 2))
  const dd = parseInt(darr[0]) + "/" + parseInt(darr[1]) + "/" + parseInt(darr[2]) + " " + parseInt(marr[0]) + ":" + parseInt(marr[1]) + ":" + parseInt(marr[2]);
  let time = new Date(Date.parse(dd));
  time.setTime(time.setHours(time.getHours() + (8 - tzone)));
  let Y = time.getFullYear() + interval;
  const addZero = (num: number) => num < 10 ? '0' + num : num;
  let M = addZero(time.getMonth() + 1) + interval;
  let D = addZero(time.getDate());
  let h = ' ' + addZero(time.getHours());
  let m = ':' + addZero(time.getMinutes());
  let s = ':' + addZero(time.getSeconds());
  let result = Y + M + D
  switch (num) {
    case 2:
      result = h + m
      break
    case 3:
      result = Y + M + D
      break;
    case 4:
      result = Y + M + D + h
      break;
    case 5:
      result = Y + M + D + h + m
      break;
    case 6:
      result = Y + M + D + h + m + s
      break;
  }
  return result;
}

/** 对象数组根据对象某一个属性去重 */
export const unique = (arr: AnyArray, key: string, hash: any = {}) => arr.reduce(function (item, next) {
  hash[next[key]] ? '' : hash[next[key]] = true && item.push(next);
  return item
}, [])

//验证emoji表情
export const hasEmoji = function (value: string, tips = "") {
  let char = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
  if (char.test(value)) {
    wx.showToast({
      title: `${tips}不能含有特殊字符`,
      icon: 'none'
    })
    return true
  }
  return false
}

//获取数组索引值
export const getIndexArr = function ({
  id = "",
  productTree = [],
  idKey = 'id',
  childrenKey = 'child'
}: { id: string, productTree?: Array<any>, idKey?: string, childrenKey?: string }) {
  let indexArr: number[] = []
  let fn: (arr: Array<any>) => boolean = (arr) => arr.some((elem: any, index) => {
    if (elem[idKey] == id) {
      indexArr.push(index)
      return true
    } else if (elem[childrenKey] && elem[childrenKey] instanceof Array && elem[childrenKey].length) {
      return fn(elem[childrenKey]) && indexArr.push(index)
    }
    return false
  })
  fn(productTree)
  indexArr.reverse()
  return indexArr
}

export const toast = function (title: string) {
  wx.showToast({
    title,
    icon: 'none'
  })
}
