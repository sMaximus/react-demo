import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/home";
import Login from "@pages/login";
import NotFound from "../pages/notFound";
import Layout from "@src/layout";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        name: "首页",
        element: <Home />,
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
