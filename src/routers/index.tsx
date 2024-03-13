import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/home";
import Login from "@pages/login";
import NotFound from "../pages/notFound";
import Layout from "@src/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    action: () => {
      console.warn(879);
      return 121;
    },
    children: [
      {
        path: "home",
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
]);

export default router;
