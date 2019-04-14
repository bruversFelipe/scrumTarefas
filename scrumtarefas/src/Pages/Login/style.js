import styled from "styled-components";
import bg from "./img/bg-login.jpg";

const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url(${bg}) no-repeat center center;
  background-size: cover;
`;

export default LoginWrapper;
