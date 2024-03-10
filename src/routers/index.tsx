import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@pages/home";
import Login from "@pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
