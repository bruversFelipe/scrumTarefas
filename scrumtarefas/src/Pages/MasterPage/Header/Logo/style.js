import styled from "styled-components";

const LogoWrapper = styled.div`
  width: 150px;
  height: 50px;
  background: url(${props => props.theme.logoHorizon});
`;

export default LogoWrapper;
