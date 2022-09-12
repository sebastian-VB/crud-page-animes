
import React, { useState } from 'react';
import axios from 'axios';

function Login(){

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');


  // const [cambio, setCambio] = useState(true);


  const loginUser = async(e)=>{
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/lr/api/singin', { usuario, contrasena });
    console.log(response.data.data);
    // setCambio(!cambio);
    // loginF(cambio)
  }

  return(
    <div>
      <form onSubmit={loginUser}>
        <div className="mb-3">
          <label  className="form-label">Usuario</label>
          <input type="email" className="form-control" id="usario" onChange={e => setUsuario(e.target.value)} value={usuario} required={true} />
        </div>

        <div className="mb-3">
          <label  className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="contrasena" onChange={e => setContrasena(e.target.value)} value={contrasena} required={true}/>
        </div>

        <button type="submit" className="btn btn-primary" >Ingresar</button>
      </form>

    </div>
  );

}

export default Login;