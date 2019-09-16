import React, { useState } from "react";
import LoginContainerWrapper, { LoginLogo } from "./style";
import Logar from "./Logar";
import history from "../../Utils/createHistory";
import Loading from "../../Components/Loading";

const NovaConta = React.lazy(() => import("./NovaConta"));

const LoginContainer = () => {
  const [novaConta, setNovaConta] = useState(false);
  const submitLogar = () => {
    history.push("/meus-projetos");
  };

  const showNovaConta = () => {
    setNovaConta(true);
  };

  const closeNovaConta = () => {
    setNovaConta(false);
  };
  const submitNovaConta = () => {
    closeNovaConta();
  };

  return (
    <LoginContainerWrapper>
      <div className="login-content">
        <div className="center-content">
          <LoginLogo />
          <h2>
            Organizer <strong>Tasks</strong>
          </h2>
        </div>
        {novaConta ? (
          <React.Suspense fallback={<Loading loading />}>
            <NovaConta
              submitForm={submitNovaConta}
              closeNovaConta={closeNovaConta}
            />
          </React.Suspense>
        ) : (
          <Logar submitForm={submitLogar} showNovaConta={showNovaConta} />
        )}
      </div>
    </LoginContainerWrapper>
  );
};

export default LoginContainer;
