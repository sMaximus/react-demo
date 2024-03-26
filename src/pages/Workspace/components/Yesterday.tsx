import { Card, Col, Image, Row, Space, Table, Tag } from "antd";
import dayjs from "dayjs";
import styles from "../index.module.less";
import timeIcon from "@assets/images/icon_time_c.png";
import { FC } from "react";

const { Column } = Table;

const cardBodyStyle: {
  padding: number;
  borderLeft: string;
  borderRadius: number;
  background: string;
  marginBottom: number;
} = {
  padding: 14,
  borderLeft: "5px solid #5D74E2",
  borderRadius: 0,
  background: "#F8F8FC",
  marginBottom: 16,
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

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

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

      <Table dataSource={data}>
        <Column
          title="序号"
          key="index"
          render={(_text: any, _record: any, index: number) => <>{index + 1}</>}
        />
        <Column title="项目名称" dataIndex="address" key="address" />
        <Column title="部门" dataIndex="tags" key="tags" />
        <Column title="姓名" dataIndex="tags" key="tags" />
        <Column
          title="填报工时"
          key="action"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </Card>
  );
};

export default Yesterday;
