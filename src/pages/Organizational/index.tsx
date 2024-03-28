import { GridContent } from "@ant-design/pro-components";
import { Card, Col, Row } from "antd";
import DeptTree from "@components/DeptTree";
import Deptable from "./components/Deptable";
import styles from "./index.module.less";

const Organizational = () => {
  return (
    <GridContent>
      <Row gutter={8}>
        <Col xl={5}>
          <Card className={styles.cartBox}>
            <span className={styles.deptTitle}>组织架构</span>
            <DeptTree></DeptTree>
          </Card>
        </Col>

        <Col xl={19}>
          <Card className={styles.cartBox}>
            <Deptable></Deptable>
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};

export default Organizational;
