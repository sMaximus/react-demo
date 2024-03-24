import { Row } from "antd";
import Welcome from "./components/Welcome";
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
        }}
      ></Row>
    </GridContent>
  );
};

export default Workspace;
