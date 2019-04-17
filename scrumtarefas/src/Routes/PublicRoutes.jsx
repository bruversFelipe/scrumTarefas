import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import LoginPage from "../Pages/Login";
import Loading from "../Components/Loading";
import ThemeContext from "../Theme/ThemeContext";
import GlobalCss from "./GlobalCss";

const MasterPage = React.lazy(() => import("../Pages/MasterPage"));

const Authentic = ({ component: Component, logged, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      logged ? (
        <Component {...props} logged={logged} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const PublicRoutes = ({ history }) => (
  <ThemeContext.Consumer>
    {({ themes }) => (
      <ThemeProvider theme={themes}>
        <GlobalCss id="global-id">
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/login" component={LoginPage} />
              <React.Suspense fallback={<Loading loading />}>
                <Authentic
                  path="/meus-projetos"
                  logged
                  component={MasterPage}
                />
              </React.Suspense>
            </Switch>
          </Router>
        </GlobalCss>
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);

export default PublicRoutes;
