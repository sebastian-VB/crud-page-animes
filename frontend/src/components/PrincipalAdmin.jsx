
import React from 'react';
import { Link } from 'react-router-dom';
import '../styleSheets/diseñoGeneral.css';

function PrincipalAdmin(){

  return(
    <div id='banner'>
        <div className='containerPrincipal'>
            <h1 className='fontLetter titleH1'>ANIME WOLF</h1>
            <Link to={'/listar-animes-ad'} className='btn btn-lg ' id='btnPrincipal'>Ver animes</Link>
        </div>
    </div>
  );

}

export default PrincipalAdmin;