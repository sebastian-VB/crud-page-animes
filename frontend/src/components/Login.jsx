
import React, { useState } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import '../styleSheets/diseñoGeneral.css';

function Login({ loginF }){

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  let cambio = true;

  const loginUser = async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:4000/lr/api/singin', { usuario, contrasena });
      // console.log(response.data.token);
      // console.log(usuario);
      // console.log(contrasena);
      loginF(!cambio, response.data.user.rol);

    }catch(err){
      console.log(err.response.data);
    }

  }

  return(
    <div className='ls-back'>

      <div className='ls-container'>
        <div className='ls-banner'></div>
        <div className='ls-info'>
          <div className='ls-img'></div>
          <div className='ls-data'>
            <form onSubmit={loginUser} id='ls-form'>
              <h4 >INICIAR SESION</h4>
              <div className='username'>
                <i className="fa-solid fa-user"></i>
                <input className='ls-inp' type="text" name="username" placeholder='username' onChange={e => setUsuario(e.target.value)} value={usuario} required={true} />
              </div>
              <div className='password'>
                <i className="fa-solid fa-key"></i>
                <input className='ls-inp' type="password" name="password" placeholder='password' onChange={e => setContrasena(e.target.value)} value={contrasena} required={true} />
              </div>
              <div>
                {/* <Link to='/' className='btn btn-lg' id='ls-btn'>Ingresar</Link> */}
                <button type="submit" className="btn btn-lg" id='ls-btn' >Ingresar</button>
                {/* <button onClick='/listar' type="submit">Iniciar Sesion</button> */}
              </div>
            </form>
            <div className='ls-foot'>
              <p>¿No tienes una cuenta?</p>
              <button className='btn btn-lg' id='ls-link' data-bs-toggle="modal" data-bs-target="#modalRegistrar">Regístrate</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade bg-dark bg-opacity-75 " id="modalRegistrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " id='modalP'>
          <div className="modal-content " id='modalC'>
            <div className="modal-header">
              <h4 className='modal-title'>REGISTRATE</h4>
              <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className='ls-container-2'>
                <div className='ls-banner-2'></div>
                  <div className='ls-info'>
                      {/* <div className='ls-img ls-img-2'></div> */}
                      <div className='ls-data ls-data2'>
                          <form id='forRegistrar'>
                              <div className='username div-input'>
                                  <i className="fa-solid fa-user"></i>
                                  <input className='ls-inp' type="text" name="username" placeholder='username' required />
                              </div>
                              <div className='email div-input'>
                                  <i class="fa-solid fa-envelope"></i>
                                  <input className='ls-inp' type="email" name="email" placeholder='example@email.com' required />
                              </div>
                              <div className='password div-input'>
                                  <i className="fa-solid fa-key"></i>
                                  <input className='ls-inp' type="password" name="password" placeholder='password' required />
                              </div>
                              <div>
                                  <Link to='/login' className='btn btn-lg' id='ls-btn'>Registrarme</Link>
                                  {/* <button onClick='/listar' type="submit">Iniciar Sesion</button> */}
                              </div>
                          </form>
                          <div className='ls-foot'>
                              <p>¿Ya tienes una cuenta?</p>
                              <Link to='/login' className='btn btn-lg' id='ls-link'>Iniciar Sesion</Link>
                          </div>
                      </div>
                  </div>
                  
              </div>

            </div>

          </div>
        </div>    
      </div>

      

      <section>
        <Outlet>

        </Outlet>
      </section>

    </div>
  );

}

export default Login;