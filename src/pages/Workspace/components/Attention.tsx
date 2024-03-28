import {
  Card,
  Col,
  ConfigProvider,
  Row,
  Segmented,
  DescriptionsProps,
  Descriptions,
  Button,
  Image,
  Flex,
} from "antd";
import styles from "../index.module.less";
import { useState } from "react";
import icon_side_next from "@assets/images/icon_side_next.png";
import icon_side_prev from "@assets/images/icon_side_pre.png";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Product",
    children: "Cloud Database",
  },
  {
    key: "2",
    label: "Billing Mode",
    children: "Prepaid",
  },
  {
    key: "3",
    label: "Automatic Renewal",
    children: "YES",
  },
  {
    key: "4",
    label: "Order time",
    children: "2018-04-24 18:00:00",
  },
];

const Attention = () => {
  const [projectLoading] = useState(false);
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemSelectedBg: "#5D74E2",
            itemSelectedColor: "#fff",
            trackBg: "#F8F8FC",
          },
        },
      }}>
      <Card
        styles={{
          body: { paddingTop: 12, paddingBottom: 12 },
        }}
        bordered={false}
        title="团队"
        loading={projectLoading}>
        <div className={styles.members}>
          <Row gutter={48}>
            <Col span={24}>
              <Segmented<string>
                size="large"
                options={["已立项", "进行中", "已完成", "运维中"]}
                onChange={(value) => {
                  console.log(value);
                }}
                block
              />

              <Descriptions
                style={{ marginTop: 16 }}
                title=""
                column={1}
                bordered
                items={items}
              />

              <Flex justify="flex-end" style={{ marginTop: 16 }}>
                <Button
                  className={styles.attentionBtn}
                  icon={
                    <Image
                      height={14}
                      width={14}
                      src={icon_side_prev}
                      preview={false}></Image>
                  }></Button>

                <Button
                  className={styles.attentionBtnNext}
                  icon={
                    <Image
                      height={14}
                      width={14}
                      src={icon_side_next}
                      preview={false}></Image>
                  }></Button>
              </Flex>
            </Col>
          </Row>
        </div>
      </Card>
    </ConfigProvider>
  );
};

export default Attention;
