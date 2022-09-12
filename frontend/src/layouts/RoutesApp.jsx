
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBarAdmin from './NavBarAdmin';
import NavBarUser from './NavBarUser';
import ListarAnimes from '../components/ListarAnimes';
import AgregarAnimes from '../components/AgregarAnimes';
import ActualizarAnimes from '../components/ActualizarAnimes';
import ListarUsuarios from '../components/ListarUsuarios';
import AgregarUsuarios from '../components/AgregarUsuarios';
import PerfilUsuario from '../components/PerfilUsuario'
import Login from '../components/Login';

function RoutesApp(){

  const role = 'admin';

  const [login, setLogin] = useState(true);

  const updateLogin = (activar)=>{
    setLogin(activar)
  }

  return(
    <div>
      <BrowserRouter>
        <Routes>
          {
            login 
            ?
              <Route path='/' element={ <Login /> } >
                <Route path='*' element={ <Navigate replace to='/' /> } /> 
              </Route>
            :
              role === 'admin'
              ?
                <Route path='/' element={ <NavBarAdmin /> }>

                  <Route path='listar-animes-ad' element={ <ListarAnimes /> } />
                  <Route path='agregar-animes-ad' element={ <AgregarAnimes /> } />
                  <Route path='modificar-animes-ad/:id' element={ <ActualizarAnimes /> } />

                  <Route path='listar-usuarios-ad' element={ <ListarUsuarios /> } />
                  <Route path='agregar-usuarios-ad' element={ <AgregarUsuarios /> } />

                  <Route path='agregar-usuarios-ad' element={ <AgregarUsuarios /> } />

                  <Route path='*' element={ <Navigate replace to='/' /> } /> 
                
                </Route>
              :
                <Route path='/' element={ <NavBarUser /> }>

                  <Route path='/listar-animes-us' element={ <ListarAnimes /> } />
                  <Route path='/perfil-us' element={ <PerfilUsuario /> } />

                  <Route path='*' element={ <Navigate replace to='/' /> } /> 
                
                </Route> 
          }
        </Routes>  
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={ <Login /> } >

            <Route path='/ad' element={ <NavBarAdmin /> } />
            <Route path='/ad/listar-animes-ad' element={ <ListarAnimes /> } />
            <Route path='/ad/agregar-animes-ad' element={ <AgregarAnimes /> } />
            <Route path='/ad/modificar-animes-ad/:id' element={ <ActualizarAnimes /> } />
            <Route path='/ad/listar-usuarios-ad' element={ <ListarUsuarios /> } />
            <Route path='/ad/agregar-usuarios-ad' element={ <AgregarUsuarios /> } />
            <Route path='/ad/agregar-usuarios-ad' element={ <AgregarUsuarios /> } />


            <Route path='/us' element={ <NavBarUser /> } />
            <Route path='/us/listar-animes-us' element={ <ListarAnimes /> } />
            <Route path='/us/perfil-us' element={ <PerfilUsuario /> } />


            <Route path='*' element={ <Navigate replace to='/' /> } /> 
          </Route>

        </Routes>  
      </BrowserRouter> */}
      
    </div>
  );
}

export default RoutesApp;