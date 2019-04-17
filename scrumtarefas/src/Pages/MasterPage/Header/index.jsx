import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "antd/lib/dropdown";
import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import Divider from "antd/lib/divider";
import HeaderWrapper from "./style";
import Logo from "./Logo";
import ThemeDark from "./ThemeDark";
import Loading from "../../../Components/Loading";
import Drawer from "../../../Components/Drawer";

const EditarPerfil = React.lazy(() =>
  import("../../../Container/EditarPerfil")
);

const dropStyle = {
  cursor: "pointer"
};

const menu = openEditaPerfil => (
  <Menu>
    <Menu.Item onClick={openEditaPerfil}>
      <Icon type="edit" /> Editar Perfil
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/">
        <Icon type="logout" /> Sair
      </Link>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  const [visiblePerfil, setPerfil] = useState(false);
  const openEditaPerfil = () => {
    setPerfil(true);
  };
  const closeDrawer = () => {
    setPerfil(false);
  };
  return (
    <HeaderWrapper>
      <Logo />
      <div className="items-right">
        <ThemeDark />
        <Divider type="left" />
        <Dropdown
          overlay={menu(openEditaPerfil)}
          getPopupContainer={() => {
            return document.getElementById("global-id");
          }}
        >
          <span style={dropStyle}>
            <Icon type="user" /> isabernardi <Icon type="down" />
          </span>
        </Dropdown>
      </div>
      <Drawer
        visible={visiblePerfil}
        onClose={closeDrawer}
        title="Editar Perfil"
        width={400}
      >
        <React.Suspense fallback={<Loading loading />}>
          <EditarPerfil />
        </React.Suspense>
      </Drawer>
    </HeaderWrapper>
  );
};

export default Header;
