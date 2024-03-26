import { Card, Col, Image, Row } from "antd";
import dayjs from "dayjs";
import styles from "../index.module.less";
import timeIcon from "@assets/images/icon_time_c.png";
import { FC } from "react";

const cardBodyStyle: {
  padding: string;
  borderLeft: string;
  borderRadius: number;
  background: string;
} = {
  padding: "14px",
  borderLeft: "5px solid #5D74E2",
  borderRadius: 0,
  background: "#F8F8FC",
};

const Info: FC<{
  time: React.ReactNode;
  context: React.ReactNode;
}> = ({ time, context }) => {
  return (
    <div>
      <span className={styles.yesterdayTitleFont}>{time}</span>
      <span className={styles.yesterdayFontColor}>{context}</span>
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
      <Card bordered={false} styles={{ body: cardBodyStyle }}>
        <Row>
          <Col sm={4} xs={24}>
            <Info time="5" context="被填写项目(数)" />
          </Col>
          <Col sm={4} xs={24}>
            <Info time="2" context="工时填写(人)" />
          </Col>
          <Col sm={4} xs={24}>
            <Info time="16" context="填写总工时(小时)" />
          </Col>
          <Col sm={4} xs={24}>
            <Info time="8" context="公司工时(小时)" />
          </Col>{" "}
          <Col sm={4} xs={24}>
            <Info time="8" context="外出工时(小时)" />
          </Col>{" "}
          <Col sm={4} xs={24}>
            <Info time="4" context="出差工时(小时)" />
          </Col>
        </Row>
      </Card>
    </Card>
  );
};

export default Yesterday;
