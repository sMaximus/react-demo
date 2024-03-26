import { Card, Col, Image, Row } from "antd";
import dayjs from "dayjs";
import styles from "../index.module.less";
import timeIcon from "@assets/images/icon_time_c.png";
import { FC } from "react";

const Info: FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  bordered?: boolean;
}> = ({ title, value, bordered }) => {
  return (
    <div>
      <span>{title}</span>
      <p>{value}</p>
      {bordered && <em />}
    </div>
  );
};

const Yesterday = () => {
  const now = dayjs().format("YYYY-MM-DD");
  return (
    <Card
      style={{
        marginBottom: 24,
      }}
      title={<div className={styles.yesterdayTitle}>昨日提交情况</div>}
      bordered={false}
      extra={
        <div>
          <Image
            className={styles.yesterdayTime}
            src={timeIcon}
            preview={false}></Image>
          {now}
        </div>
      }>
      <Card bordered={false}>
        <Row>
          <Col sm={8} xs={24}>
            <Info title="我的待办" value="8个任务" bordered />
          </Col>
          <Col sm={8} xs={24}>
            <Info title="本周任务平均处理时间" value="32分钟" bordered />
          </Col>
          <Col sm={8} xs={24}>
            <Info title="本周完成任务数" value="24个任务" />
          </Col>
        </Row>
      </Card>
    </Card>
  );
};

export default Yesterday;
