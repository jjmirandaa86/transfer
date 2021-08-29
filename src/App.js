import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cargando from "./Components/View/Share/Cargando";
import { Init } from "./Components/View/Init";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Cargando />}>
        <Router>
          <Switch>
            <Route exact path="/" children={<Init />} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
