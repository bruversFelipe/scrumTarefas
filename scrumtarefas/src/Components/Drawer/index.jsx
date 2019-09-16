import React from "react";
import DrawerWrapper from "./style";

const Drawer = ({ children, ...props }) => (
  <DrawerWrapper {...props}>{children}</DrawerWrapper>
);

export default Drawer;
