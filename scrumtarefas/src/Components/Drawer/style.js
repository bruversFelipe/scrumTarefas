import styled from "styled-components";
import Drawer from "antd/lib/drawer";

const DrawerWrapper = styled(Drawer)`
  .ant-drawer-content {
    box-shadow: 0 0 10px ${props => props.theme.shadow};
    border-radius: 0;
    background: ${props => props.theme.drawer.background};
    .ant-drawer-header,
    .ant-drawer-body {
      border-radius: 0;
    }

    .ant-drawer-header {
      background: ${props => props.theme.drawer.header};
      height: 64px;
      display: flex;
      align-items: center;

      .ant-drawer-close {
        color: ${props => props.theme.drawer.color};
        height: 100%;
      }
    }

    .ant-drawer-title {
      font-weight: 400;
      color: ${props => props.theme.drawer.color};
    }
  }
`;

export default DrawerWrapper;
