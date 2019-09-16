import React from "react";
import Countdown from "../../Components/Countdown";
import Icon from "antd/lib/icon";
import { Row, Col } from "antd/lib/grid";

const EstatisticasItem = () => (
  <Row type="flex" gutter={18}>
    <Col span={12}>
      <Countdown
        title="Projetos"
        icon={<Icon type="project" />}
        color="#459f5a"
        numberMax={2}
      />
    </Col>
    <Col span={12}>
      <Countdown
        title="Post its"
        icon={<Icon type="project" />}
        color="#c50f6b"
        numberMax={7}
      />
    </Col>
  </Row>
);

export default EstatisticasItem;
