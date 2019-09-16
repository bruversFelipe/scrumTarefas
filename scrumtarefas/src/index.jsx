import React from "react";
import ReactDOM from "react-dom";
import LocaleProvider from "antd/lib/locale-provider";
import "antd/dist/antd.css";
import ptBr from "antd/lib/locale-provider/pt_BR";
import PublicRoutes from "./Routes/PublicRoutes";
import createHistory from "./Utils/createHistory";
import { ThemeContextProvider } from "./Theme/ThemeContext";

ReactDOM.render(
  <LocaleProvider locale={ptBr}>
    <ThemeContextProvider>
      <PublicRoutes history={createHistory} />
    </ThemeContextProvider>
  </LocaleProvider>,
  document.getElementById("root")
);
