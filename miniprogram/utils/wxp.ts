import { promisifyAll } from "../plugins/wx-promise/index";
const wxp = {};
promisifyAll(wx, wxp);
export default wxp as WXP;
