import styled from "styled-components";

const GlobalCss = styled.div`
  .ant-form-item {
    margin-bottom: 8px;
  }

  .ant-dropdown {
    .ant-dropdown-menu {
      background: ${props => props.theme.dropdown.background};

      .ant-dropdown-menu-item {
        color: ${props => props.theme.dropdown.color};
        a {
          color: ${props => props.theme.dropdown.color};
        }
      }
      .ant-dropdown-menu-item:hover,
      .ant-dropdown-menu-submenu-title:hover {
        background-color: ${props => props.theme.dropdown.hover};
      }
    }
  }
`;

export default GlobalCss;
