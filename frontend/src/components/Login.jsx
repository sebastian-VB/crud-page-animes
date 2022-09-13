
import React, { useState } from 'react';
import axios from 'axios';
import '../styleSheets/diseñoGeneral.css';

function Login({ loginF }){

  //estados para los campos del login  
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  //estados para los campos de register
  const [nombreR, setNombreR] = useState('');  
  const [usuarioR, setUsuarioR] = useState('');
  const [contrasenaR, setContrasenaR] = useState('');

  let cambio = true;

  const loginUser = async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:4000/lr/api/singin', { usuario, contrasena });
      // console.log(response.data.token);
      // console.log(response.data.user);
      loginF(!cambio, response.data.user);

    }catch(err){
      console.log(err.response.data);
    }
  }

  const registerUser = async(e)=>{

    try{
      const response = await axios.post('http://localhost:4000/lr/api/singup/', {
        nombre: nombreR,
        usuario: usuarioR,
        contrasena: contrasenaR
      });
      console.log(response.data);

    }catch(err){
      console.log(err.response.data);
    }

  };

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
                <button type="submit" className="btn btn-lg" id='ls-btn' >Ingresar</button>
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
                      <div className='ls-data ls-data2'>
                          <form id='forRegistrar' onSubmit={registerUser}>
                              <div className='username div-input'>
                                  <i className="fa-solid fa-user"></i>
                                  <input className='ls-inp' type="text" name="username" placeholder='username' required onChange={ e=>setNombreR(e.target.value)} value={nombreR} />
                              </div>
                              <div className='email div-input'>
                                  <i className="fa-solid fa-envelope"></i>
                                  <input className='ls-inp' type="email" name="email" placeholder='example@email.com' required onChange={ e=> setUsuarioR(e.target.value)} value={usuarioR} />
                              </div>
                              <div className='password div-input'>
                                  <i className="fa-solid fa-key"></i>
                                  <input className='ls-inp' type="password" name="password" placeholder='password' required onChange={ e=> setContrasenaR(e.target.value)} value={contrasenaR} />
                              </div>
                              <div>
                                  <button type="submit" className='btn btn-lg' id='ls-btn2'>Registrarme</button>
                              </div>
                          </form>
                          {/* <div className='ls-foot'>
                              <p>¿Ya tienes una cuenta?</p>
                              <Link to='/' className='btn btn-lg' id='ls-link'>Iniciar Sesion</Link>
                              
                          </div> */}
                      </div>
                  </div>
                  
              </div>

            </div>

          </div>
        </div>    
      </div>

      

      {/* <section>
        <Outlet>

        </Outlet>
      </section> */}

    </div>
  );

}

export default Login;