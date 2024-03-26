import {
  MenuDataItem,
  PageContainer,
  ProLayout,
} from "@ant-design/pro-components";
import { Outlet } from "react-router";
import { router } from "@src/routers";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./modules/Navbar";
import Styles from "./index.module.less";

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
          console.warn(121);
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
      }}>
      <ProLayout
        menuHeaderRender={() => (
          <div className={Styles.pageSideTitle}>书生工时系统</div>
        )}
        pageTitleRender={() => {
          return "书生工时系统";
        }}
        logo={false}
        location={{
          pathname: "/",
        }}
        token={{
          bgLayout: "#EBEFF3",
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
        collapsedButtonRender={false}
        route={{
          routes: [...routers],
        }}
        menuItemRender={(
          itemProps: MenuDataItem,
          defaultDom: React.ReactNode
        ) => <Link to={itemProps.path || "/"}>{defaultDom}</Link>}>
        <Navbar
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />
        <PageContainer
          header={{
            title: "",
            style: {
              padding: "12px 24px",
            },
          }}
          content={<Outlet />}></PageContainer>
      </ProLayout>
    </div>
  );
};

export default Layout;
