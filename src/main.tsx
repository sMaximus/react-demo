/*
 * @Author: zhangjiaming zhangjiaming@sursenelec.com
 * @Date: 2024-03-09 22:07:55
 * @LastEditors: zhangjiaming zhangjiaming@sursenelec.com
 * @LastEditTime: 2024-03-09 23:11:18
 * @FilePath: /react-demo/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
