import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "antd/lib/dropdown";
import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import HeaderWrapper from "./style";
import Logo from "./Logo";

const dropStyle = {
    cursor: 'pointer',
}

const menu = (
  <Menu>
    <Menu.Item>
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

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Dropdown overlay={menu}>
      <span style={dropStyle}>
        <Icon type="user" /> isabernardi <Icon type="down" />
      </span>
    </Dropdown>
  </HeaderWrapper>
);

export default Header;
