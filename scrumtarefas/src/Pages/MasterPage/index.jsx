import React from "react";
import MasterPageStyle from "./style";
import Header from "./Header";
import PageContent from "./PageContent";
import renderPages from "../../Routes/renderPages";
import Routes from "../../Routes/Routes";

const MasterPage = () => (
  <MasterPageStyle>
    <Header />
    <PageContent>{renderPages(Routes)}</PageContent>
  </MasterPageStyle>
);

export default MasterPage;
