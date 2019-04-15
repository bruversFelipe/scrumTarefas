import React from "react";
import ReactDOM from "react-dom";
import LocaleProvider from "antd/lib/locale-provider";
import "antd/dist/antd.css";
import ptBr from "antd/lib/locale-provider/pt_BR";
import PublicRoutes from "./Routes/PublicRoutes";
import createHistory from "./Utils/createHistory";
import GlobalCss from "./GlobalCss";

ReactDOM.render(
  <LocaleProvider locale={ptBr}>
    <GlobalCss>
      <PublicRoutes history={createHistory} />
    </GlobalCss>
  </LocaleProvider>,
  document.getElementById("root")
);
