import React from "react";
import LoginContainerWrapper, { LoginLogo } from "./style";
import LoginForm from "./LoginForm";

import history from "../../Utils/createHistory";

const LoginContainer = () => {
  const submitForm = () => {
    history.push("/meus-projetos");
  };

  return (
    <LoginContainerWrapper>
      <div className="login-content">
        <div className="center-content">
          <LoginLogo />
          <h2>Organizer <strong>Tasks</strong></h2>
        </div>
        <LoginForm submitForm={submitForm} />
        <span className="singup">
          Não possui uma conta? <a href="#">Crie já!</a>
        </span>
      </div>
    </LoginContainerWrapper>
  );
};

export default LoginContainer;
