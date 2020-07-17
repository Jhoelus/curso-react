import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NotasMy from './components/notasMy/Notas'
import Presupuesto from './components/presupuestoMy/Presupuesto'
import NavBar from "./components/navBar/NavBar"
import Login from "./components/login/Login"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cotizador from './components/cotizadorMy/Cotizador';

function App() {

  const [isLoggin, setisLoggin] = useState(false)

  return (
    <Router>
        { isLoggin &&
          <Fragment>
              <NavBar />
          </Fragment>
        }
        <Switch>
          <Route path="/notas">
              <NotasMy />
          </Route>
          <Route path="/presupuesto">
              <Presupuesto />
          </Route>
          <Route path="/cotizador">
            <Cotizador />
          </Route>
          <Route path="/">
              <Login setisLoggin={setisLoggin} isLoggin={isLoggin} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
