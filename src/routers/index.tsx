import { createBrowserRouter } from "react-router-dom";
import Login from "@root/src/pages/Login";
import NotFound from "@pages/NotFound";
import Layout from "@src/layout";
import Workspace from "@pages/Workspace";
import Contract from "@pages/Contract";
import Logs from "@pages/Logs";
import Organizational from "@pages/Organizational";
import Project from "@pages/Project";
import Statistics from "@pages/Statistics";
import Webdick from "@pages/Webdick";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        name: "工作台",
        element: <Workspace />,
      },
      {
        path: "organizational",
        name: "组织架构",
        element: <Organizational />,
      },
      {
        path: "/contract",
        name: "合同管理",
        element: <Contract />,
      },
      {
        path: "/project",
        name: "项目管理",
        element: <Project />,
      },
      {
        path: "/logs",
        name: "工时日志",
        element: <Logs />,
      },
      {
        path: "/webdick",
        name: "公司网盘",
        element: <Webdick />,
      },
      {
        path: "/statistics",
        name: "查询统计",
        element: <Statistics />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const routers = createBrowserRouter(router);

export { router };
export default routers;
