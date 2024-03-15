import { CrownFilled, TabletFilled } from "@ant-design/icons";

export default {
  route: {
    path: "/",
    locale: false,
    routes: [
      {
        name: "列表页",
        icon: <TabletFilled />,
        path: "/list",
        component: "./ListTableList",
        routes: [
          {
            path: "/list/sub-page",
            name: "列表页面",
            icon: <CrownFilled />,
            routes: [
              {
                path: "sub-sub-page1",
                name: "一一级列表页面",
                icon: <CrownFilled />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page2",
                name: "一二级列表页面",
                icon: <CrownFilled />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page3",
                name: "一三级列表页面",
                icon: <CrownFilled />,
                component: "./Welcome",
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "二级列表页面",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
          {
            path: "/list/sub-page3",
            name: "三级列表页面",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/",
  },
};
