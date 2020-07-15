import React from 'react'

import {
    Link
    // useRouteMatch,
    // useParams
  } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/notas" className="nav-link" >Notas</Link>
              </li>
              <li className="nav-item">
                <Link to="/presupuesto" className="nav-link" >Presupuesto</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}
