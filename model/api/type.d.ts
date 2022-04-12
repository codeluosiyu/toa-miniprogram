/**
 * 商品类型
 */
type ProductType = "GOODS" | "GIFT";
/**
 * 订单类型
 * wait_pay: '待付款',
 * wait_shipment: '待发货',
 * wait_receive: '待收货',
 * wait_estimate: '待评价',
 * success: '已完成',
 * refunded: '退款完成',
 * cancelled: '已取消',
 * deleted: '已删除',
 */
type OrderType =
  | "all"
  | "wait_pay"
  | "wait_shipment"
  | "wait_receive"
  | "wait_estimate"
  | "cancelled"
  | "success"
  | "refunded"
  | "success,wait_estimate"
  | "refunded,cancelled";
