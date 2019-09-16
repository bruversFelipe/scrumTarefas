import React, { useState } from "react";
import Tooltip from "antd/lib/tooltip";
import Icon from "antd/lib/icon";
import EstatisticasWrapper from "./style";
import Drawer from "../../Components/Drawer";
import Loading from "../../Components/Loading";

const EstatisticasItem = React.lazy(() => import("./EstatisticasItem"));

const Estatisticas = () => {
  const [showEstatistica, setEstatistica] = useState(false);
  const openEstatisticas = () => {
    setEstatistica(true);
  };
  const closeDrawer = () => {
    setEstatistica(false);
  };
  return (
    <EstatisticasWrapper>
      <Tooltip title="Estatísticas">
        <Icon type="pie-chart" onClick={openEstatisticas} />
      </Tooltip>
      <Drawer
        visible={showEstatistica}
        onClose={closeDrawer}
        title="Estatísticas"
        width={400}
      >
        <React.Suspense fallback={<Loading loading />}>
          <EstatisticasItem />
        </React.Suspense>
      </Drawer>
    </EstatisticasWrapper>
  );
};
export default Estatisticas;
