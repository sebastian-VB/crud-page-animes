
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styleSheets/diseñoGeneral.css';

function NavBarAdmin (){

  return(
    <>
      <nav className="navbar navbar-expand-lg bg-dark w-100 navBarMenu">
        <div className="container-fluid">
          <Link className="navbar-brand text-white"to='/' id='linkNav'>ADMIN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className='nav-link text-white' to="/listar-animes-ad" id='linkNav'>LISTAR ANIMES</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-white' to="/agregar-animes-ad" id='linkNav'>AGREGAR ANIMES</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-white' to="/listar-usuarios-ad" id='linkNav'>LISTAR USUARIOS</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-white' to="/agregar-usuarios-ad" id='linkNav'>AGREGAR USUARIOS</Link>
              </li>
              <li className="nav-item">
                <a className='nav-link text-white' href="http://localhost:3000/" id='linkNav'>Salir</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <Outlet>

        </Outlet>
      </section>
    </>
  );
}

export default NavBarAdmin;
