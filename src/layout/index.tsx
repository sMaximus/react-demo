import { ProLayout } from "@ant-design/pro-components";
import { Outlet } from "react-router";
import { router } from "@src/routers";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./modules/Navbar";

interface RouterItem {
  path: string;
  index: boolean;
  name: string;
  element: Element;
  routes?: any[];
  children?: any[];
}

const Layout = () => {
  const [routers, setRouters] = useState<RouterItem[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const transRouter = (routerList: any): RouterItem[] => {
      return routerList.map((router: RouterItem) => {
        if (router.index) {
          router.path = "/";
        }
        if (router.children?.length) {
          router.routes = transRouter(router.children);
        }
        return router;
      });
    };

    const LayoutRouter =
      router.find((item) => item.path === "/")?.children || [];

    const newRouter = transRouter(LayoutRouter);

    setRouters(newRouter);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ProLayout
        title="书生运营管理平台"
        pageTitleRender={() => {
          return "书生运营管理平台";
        }}
        logo={false}
        location={{
          pathname: "/",
        }}
        token={{
          sider: {
            colorMenuBackground: "#0F1337",
            colorTextMenuTitle: "#FFFFFF",
            colorTextMenu: "#A4A9C1",
            colorTextMenuSelected: "#FFFFFF",
            colorTextMenuItemHover: "#FFFFFF",
          },
        }}
        breakpoint={false}
        collapsed={collapsed}
        contentStyle={{
          padding: 0,
          background: "#EBEFF3",
          height: "100vh",
        }}
        collapsedButtonRender={false}
        route={{
          routes: [...routers],
        }}
        menuItemRender={(item, dom) => <Link to={item.path || "/"}>{dom}</Link>}
      >
        <Navbar
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />

        <Outlet />
      </ProLayout>
    </div>
  );
};

export default Layout;
