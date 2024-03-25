import { Col, Row } from "antd";
import Welcome from "./components/Welcome";
import Yesterday from "./components/Yesterday";
import { GridContent } from "@ant-design/pro-components";
import { Suspense } from "react";

const Workspace = () => {
  return (
    <GridContent>
      <Suspense fallback={null}>
        <Welcome />
      </Suspense>

      <Row
        gutter={24}
        style={{
          marginTop: 24,
        }}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Yesterday />
        </Col>
      </Row>
    </GridContent>
  );
};

export default Workspace;
