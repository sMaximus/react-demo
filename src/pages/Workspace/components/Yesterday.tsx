import { Card } from "antd";
import dayjs from "dayjs";
import styles from "../index.less";

const Yesterday = () => {
  const now = dayjs().format("YYYY-MM-DD");
  return (
    <Card
      style={{
        marginBottom: 24,
      }}
      title={<span className={styles.yesterdayTitle}>昨日提交情况</span>}
      bordered={false}
      extra={<>{now}</>}>
      12312
    </Card>
  );
};

export default Yesterday;
