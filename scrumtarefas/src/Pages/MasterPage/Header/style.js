import styled from "styled-components";
import Layout from "antd/lib/layout";

const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  box-shadow: 0px 0px 10px ${props => props.theme.shadow};
  display: flex;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
`;

export default HeaderWrapper;
