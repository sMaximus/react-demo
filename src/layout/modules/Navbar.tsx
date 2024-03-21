import React, { FC } from "react";
import { PageHeader } from "@ant-design/pro-components";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import styles from "./index.module.less";

interface NavbarProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const Navbar: FC<NavbarProps> = ({ collapsed, onCollapse }) => {
  const now = new Date().toLocaleString();
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
            <Dropdown>
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
