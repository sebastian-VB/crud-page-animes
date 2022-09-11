
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styleSheets/diseñoGeneral.css';

function NavBarUser (){

  return(
    <>
      <nav className="navbar navbar-expand-lg bg-dark w-100 navBarMenu">
        <div className="container-fluid">
          <Link className="navbar-brand text-white"to='/' id='linkNav'>USER</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className='nav-link text-white' to="/listar-animes-us" id='linkNav'>LISTAR ANIMES</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-white' to="/perfil-us" id='linkNav'>PERFIL</Link>
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

export default NavBarUser;