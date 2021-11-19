import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cargando from "./Components/View/Share/Cargando";

import RouteMain from "./Components/View/RouteMain";
import Main from "./Components/View/Main";
import NewTransfers from "./Components/View/Menu/NewTransfers";
import Pruebas from "./Components/View/Pruebas";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Cargando />}>
        <Router>
          <Switch>
            <Route exact path="/" children={<RouteMain />} />
            <Route exact path="/main" children={<Main />} />
            <Route exact path="/new" children={<NewTransfers />} />
            <Route exact path="/prueba" children={<Pruebas />} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
