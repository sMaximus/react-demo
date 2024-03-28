import { GridContent } from "@ant-design/pro-components";
import { Card, Col, Row } from "antd";
import DeptTree from "@components/DeptTree";

const Organizational = () => {
  return (
    <div style={{ height: "100%" }}>
      <GridContent>
        <Row gutter={8}>
          <Col xl={5}>
            <Card>
              <DeptTree></DeptTree>
            </Card>
          </Col>
        </Row>
      </GridContent>
    </div>
  );
};

export default Organizational;
