import React from "react";
import {Link} from 'react-router-dom';


const NavBar = () => {
   return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/'>
    <img src='./pokemonlogo.png' width='50' ></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Tienda'>Tienda</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/items'>Items</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
   )  
}

export default NavBar;