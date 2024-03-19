import { PageHeader, ProLayout } from "@ant-design/pro-components";
import { Outlet } from "react-router";
import { router } from "@src/routers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined } from "@ant-design/icons";

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
  const navigate = useNavigate();

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
  }, [router]);

  return (
    <div
      style={{
        height: "100vh",
      }}>
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
        collapsedButtonRender={false}
        route={{
          routes: [...routers],
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              navigate(item.path || "/");
            }}>
            {dom}
          </div>
        )}>
        <PageHeader tabActiveKey={Date.now()} />
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default Layout;
