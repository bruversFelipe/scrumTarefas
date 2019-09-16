import styled from "styled-components";

const LoginContainerWrapper = styled.div`
  width: 400px;
  height: 80%;
  overflow-y: auto;
  z-index: 10;
  position: relative;
  border-radius: 8px;
  margin-right: 45px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  .login-content {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    justify-content: center;

    .center-content {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10px;

      h2 {
        font-weight: 300;
      }
    }
    .singup {
      text-align: center;

      span {
        color: ${props => props.theme.primary};
        cursor: pointer;
      }
    }
  }
`;

const LoginLogo = styled.div`
  width: 80px;
  height: 81px;
  background: url('${props => props.theme.logo}') no-repeat center;
`;

export default LoginContainerWrapper;
export { LoginLogo };
