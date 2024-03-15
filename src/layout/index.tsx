import type { ProSettings } from "@ant-design/pro-components";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import { useState } from "react";
import MenuCard from "./modules/MenuCard";
import defaultProps from "./_defaultProps";

const Layout = () => {
  const [settings] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    splitMenus: true,
    layout: "side",
  });

  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
  if (typeof document === "undefined") {
    return <div />;
  }
  return (
    <ProConfigProvider hashed={false}>
      <ConfigProvider
        getTargetContainer={() => {
          return document.getElementById("root") || document.body;
        }}>
        <ProLayout
          {...defaultProps}
          location={{
            pathname,
          }}
          token={{
            sider: {
              colorBgMenuItemSelected:
                "linear-gradient(270deg, rgba(93,116,226,0.44) 0%, #5D74E2 100%)",
              colorTextMenu: "#A4A9C1",
            },
          }}
          collapsedButtonRender={false}
          menu={{
            collapsedShowGroupTitle: true,
            type: "group",
          }}
          actionsRender={(props) => {
            if (props.isMobile) return [];
            if (typeof window === "undefined") return [];
            return [<div>2024-04-23 星期二</div>];
          }}
          headerTitleRender={(logo, title, _) => {
            const defaultDom = (
              <a>
                {logo}
                {title}
              </a>
            );
            if (typeof window === "undefined") return defaultDom;
            if (document.body.clientWidth < 1400) {
              return defaultDom;
            }
            if (_.isMobile) return defaultDom;
            return (
              <>
                {defaultDom}
                <MenuCard />
              </>
            );
          }}
          onMenuHeaderClick={(e) => console.log(e)}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                setPathname(item.path || "/");
              }}>
              {dom}
            </div>
          )}
          {...settings}></ProLayout>
      </ConfigProvider>
    </ProConfigProvider>
  );
};

export default Layout;
