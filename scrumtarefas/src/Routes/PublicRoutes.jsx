import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import LoginPage from "../Pages/Login";
import themeDefault from "../Theme/default";
import Loading from "../Components/Loading";

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
  <ThemeProvider theme={themeDefault}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <React.Suspense fallback={<Loading loading />}>
          <Authentic path="/meus-projetos" logged component={MasterPage} />
        </React.Suspense>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default PublicRoutes;
