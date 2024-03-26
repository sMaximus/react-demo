import { createBrowserRouter } from "react-router-dom";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Layout from "@src/layout";
import Workspace from "@pages/Workspace";
import Contract from "@pages/Contract";
import Logs from "@root/src/pages/Syslogs";
import Organizational from "@pages/Organizational";
import Project from "@pages/Project";
import Statistics from "@pages/Statistics";
import Webdick from "@pages/Webdick";

import LogsIcon from "@assets/images/LogsIcon.png";
import WebdickIcon from "@assets/images/WebdickIcon.png";
import ProjectIcon from "@assets/images/ProjectIcon.png";
import StatisticsIcon from "@assets/images/StatisticsIcon.png";
import WorkspaceIcon from "@assets/images/WorkspaceIcon.png";
import OrganizationalIcon from "@assets/images/OrganizationalIcon.png";
import ContractIcon from "@assets/images/ContractIcon.png";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        name: "工作台",
        element: <Workspace />,
        icon: WorkspaceIcon,
      },
      {
        path: "organizational",
        name: "组织架构",
        element: <Organizational />,
        icon: OrganizationalIcon,
      },
      {
        path: "/contract",
        name: "合同管理",
        element: <Contract />,
        icon: ContractIcon,
      },
      {
        path: "/project",
        name: "项目管理",
        element: <Project />,
        icon: ProjectIcon,
      },
      {
        path: "/logs",
        name: "工时日志",
        element: <Logs />,
        icon: LogsIcon,
      },
      {
        path: "/webdick",
        name: "公司网盘",
        element: <Webdick />,
        icon: WebdickIcon,
      },
      {
        path: "/statistics",
        name: "查询统计",
        element: <Statistics />,
        icon: StatisticsIcon,
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
