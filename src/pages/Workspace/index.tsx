import { Col, Row } from "antd";
import Welcome from "./components/Welcome";
import Yesterday from "./components/Yesterday";
import Quickstart from "./components/Quickstart";
import Attention from "./components/Attention";
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
          flex: 1,
        }}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Yesterday />
        </Col>

        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Quickstart />

          <Attention />
        </Col>
      </Row>
    </GridContent>
  );
};

export default Workspace;
