import { PageContainer } from "@ant-design/pro-components";
import { Avatar, Card, ConfigProvider, Flex, Space } from "antd";
import Title from "antd/es/typography/Title";

const Welcome = () => {
  return (
    <Card style={{ margin: "24px" }}>
      <ConfigProvider
        theme={{
          components: {
            Typography: {
              titleMarginBottom: "0px",
              titleMarginTop: "0px",
              fontSizeHeading1: 36,
            },
          },
        }}
      >
        <PageContainer
          header={{
            title: "",
            style: {
              padding: 0,
            },
          }}
          content={
            <Flex vertical={false} align="center" justify="space-between">
              <Space size={22}>
                <Avatar size={100} />

                <Flex gap="middle" vertical>
                  <Title level={3} style={{ margin: 0, color: "#5D74E2" }}>
                    下午好，万川枫，欢迎登录书生运营管理平台
                  </Title>

                  <Title level={5} type="secondary">
                    您有新的被填写工时，请及时查看。
                  </Title>
                </Flex>
              </Space>

              <Flex align="center" vertical gap="middle">
                <Title level={5} type="secondary" style={{ margin: 0 }}>
                  项目数
                </Title>

                <Title level={1}>88</Title>
              </Flex>
            </Flex>
          }
        ></PageContainer>
      </ConfigProvider>
    </Card>
  );
};

export default Welcome;
