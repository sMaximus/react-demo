import { PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import styles from "../index.module.less";
import { Link } from "react-router-dom";

type EditableLink = {
  title: string;
  href: string;
  id?: string;
};

type EditableLinkGroupProps = {
  onAdd: () => void;
  links: EditableLink[];
};

const links = [
  {
    title: "操作一",
    href: "",
  },
  {
    title: "操作二",
    href: "",
  },
  {
    title: "操作三",
    href: "",
  },
  {
    title: "操作四",
    href: "",
  },
  {
    title: "操作五",
    href: "",
  },
  {
    title: "操作六",
    href: "",
  },
];

const EditableLinkGroup: React.FC<EditableLinkGroupProps> = (props) => {
  const { links, onAdd } = props;
  return (
    <div className={styles.linkGroup}>
      {links.map((link) => (
        <Link key={`linkGroup-item-${link.id || link.title}`} to={link.href}>
          <span className={styles.closeIcon}></span>
          {link.title}
        </Link>
      ))}
      <Button
        className={styles.linkItem}
        size="small"
        type="primary"
        ghost
        onClick={onAdd}>
        <PlusOutlined /> 添加
      </Button>
    </div>
  );
};
const Quickstart = () => {
  return (
    <Card
      style={{
        marginBottom: 24,
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
      title="快速开始 / 便捷导航"
      bordered={false}>
      <EditableLinkGroup onAdd={() => {}} links={links} />
    </Card>
  );
};

export default Quickstart;
