import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../Register";
import Login from "../Login";
import Dashboard from "../Dashboard";

import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
