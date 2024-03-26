import { FC } from "react";
import { PageHeader } from "@ant-design/pro-components";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import styles from "../index.module.less";
import dayjs from "dayjs";

interface NavbarProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const Navbar: FC<NavbarProps> = ({ collapsed, onCollapse }) => {
  const now = dayjs().format("YYYY-MM-DD dddd");

  const items: MenuProps["items"] = [
    {
      key: "4",
      danger: true,
      label: "退出登录",
    },
  ];

  return (
    <PageHeader className={styles.pageHeader}>
      <div className={styles.content}>
        <span onClick={() => onCollapse()}>
          {collapsed ? (
            <MenuUnfoldOutlined className={styles.backIcon} />
          ) : (
            <MenuFoldOutlined className={styles.backIcon} />
          )}
        </span>
        <div className={styles.rightMenu}>
          <Space size={16}>
            <span className={styles.dataBar}>{now}</span>
            <span className={styles.avatarBar}>
              {/* <Avatar size={40} src={avatar.src} /> */}
            </span>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  期限生活
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </div>
      </div>
    </PageHeader>
  );
};

export default Navbar;
