import { PageHeader, ProLayout } from "@ant-design/pro-components";
import { Outlet } from "react-router";
import { router } from "@src/routers";
import { useEffect, useState } from "react";

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
      }}
    >
      <ProLayout
        title="工时系统"
        pageTitleRender={() => {
          return "工时系统";
        }}
        logo={false}
        location={{
          pathname: "/",
        }}
        collapsedButtonRender={false}
        route={{
          routes: [...routers],
        }}
      >
        <PageHeader></PageHeader>
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default Layout;
