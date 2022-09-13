
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
import Registro from '../components/Registrar';
import PrincipalAdmin from '../components/PrincipalAdmin';
import PrincipalUser from '../components/PrincipalUser';

function RoutesApp(){

  const [login, setLogin] = useState(true);
  const [adminOuser, setAdminOuser] = useState('');

  const updateLogin = (activar, aoru)=>{
    setLogin(activar);
    setAdminOuser(aoru);
  }

  return(
    <div>
      <BrowserRouter>
        <Routes>
          {
            login 
            ?
              <Route path='/' element={ <Login loginF={updateLogin}/> } >

                <Route path='registrar' element={ <Registro /> } /> 
                <Route path='*' element={ <Navigate replace to='/' /> } /> 
              </Route>
            :
              adminOuser.rol === 'admin'
              ?
                <Route path='/' element={ <NavBarAdmin /> }>

                  <Route path='/' element={ <PrincipalAdmin /> } />
                  <Route path='listar-animes-ad' element={ <ListarAnimes /> } />
                  <Route path='agregar-animes-ad' element={ <AgregarAnimes /> } />
                  <Route path='modificar-animes-ad/:id' element={ <ActualizarAnimes /> } />

                  <Route path='listar-usuarios-ad' element={ <ListarUsuarios /> } />
                  <Route path='agregar-usuarios-ad' element={ <AgregarUsuarios /> } />

                  <Route path='agregar-usuarios-ad' element={ <AgregarUsuarios /> } />

                  <Route path='*' element={ <Navigate replace to='/' /> } /> 
                
                </Route>
              :
                <Route path='/' element={ <NavBarUser  userName={adminOuser.nombre} /> }>

                  <Route path='/' element={ <PrincipalUser /> } />
                  <Route path='/listar-animes-us' element={ <ListarAnimes /> } />
                  <Route path='/perfil-us' element={ <PerfilUsuario idUser={adminOuser.id} /> } />

                  <Route path='*' element={ <Navigate replace to='/' /> } /> 
                
                </Route> 
          }
        </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default RoutesApp;