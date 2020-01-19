import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import Landing from "./components/Landing";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
