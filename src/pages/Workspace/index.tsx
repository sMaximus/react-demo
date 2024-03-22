import { PageContainer } from "@ant-design/pro-components";
import { Avatar, Card, Typography, Flex, Space } from "antd";

const { Title } = Typography;

const Workspace = () => {
  return (
    <Card style={{ margin: "24px" }}>
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

              <Flex vertical>
                <Title level={3}>
                  下午好，万川枫，欢迎登录书生运营管理平台
                </Title>

                <Title level={5} type="secondary">
                  您有新的被填写工时，请及时查看。
                </Title>
              </Flex>
            </Space>

            <Flex gap="small" align="center" vertical>
              <Title level={5} type="secondary">
                项目数
              </Title>
              <Title>88</Title>
            </Flex>
          </Flex>
        }></PageContainer>
    </Card>
  );
};

export default Workspace;
