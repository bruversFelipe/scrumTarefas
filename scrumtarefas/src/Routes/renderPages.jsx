import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Title from "../Components/Title";
import Loading from "../Components/Loading";
import pages from "../Routes/Pages";
import Estatisticas from "../Container/Estatisticas";

const LazyComponent = (Component, title) => {
  return props => (
    <React.Suspense fallback={<Loading loading />}>
      <Estatisticas />
      <Title title={title} />
      <Component {...props} />
    </React.Suspense>
  );
};

const renderPages = routes => (
  <Switch>
    {routes.map(route =>
      route.redirect ? (
        <Redirect exact from={route.path} to={route.redirect} />
      ) : (
        <Route
          key={route.key}
          exact={route.exact}
          path={route.path}
          render={LazyComponent(pages[route.component], route.title)}
        />
      )
    )}
  </Switch>
);

export default renderPages;
