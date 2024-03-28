import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Roletable from "./Roletable";
import UserTable from "./Usertable";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "用户管理",
    children: <Roletable />,
  },
  {
    key: "2",
    label: "角色管理",
    children: <UserTable />,
  },
];

const Deptable: React.FC = () => <Tabs defaultActiveKey="1" items={items} />;

export default Deptable;
