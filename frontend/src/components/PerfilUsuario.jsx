
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styleSheets/diseñoGeneral.css';

function PerfilUsuario ({ idUser }){

  const [user, setUser] = useState({});
  const [nombreU, setNombreU] = useState('');
  const [emailU, setEmailU] = useState('');

  //funcion para obtener usuario
  const getOnlyUser= async()=>{
    const response = await axios.get(`http://localhost:4000/lr/api/${idUser}`);
    setUser(response.data.user);
    setNombreU(response.data.user.nombre);
    setEmailU(response.data.user.usuario);
  }

  //funcion para actualizar usuario
  const updateUser = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.put(`http://localhost:4000/lr/api/${idUser}`, { nombre: nombreU, usuario:emailU });
      console.log(response.data);
      getOnlyUser();

    }catch(error){
      console.log(error);
    }

  }


  useEffect(()=>{
    getOnlyUser();

  },[])

  return(
    <div>
      {
        user != null
        ?
          <div className='p-5 perfilUsuario-back'>
            <div className='container-perfil'>
              <div className='img-Perfil'>
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='' />
              </div>
              <div className='detallesP'>
                  <p>DETALLES DE LA CUENTA</p>
              </div>
              <div className='content-perfil'>
                  <div className='info-perfil'>
                      <h5>Nombre: <span>{user.nombre}</span></h5>
                      <h5>Usuario: <span>{user.usuario}</span></h5>
                  </div>
                  <div className="button-perfil">
                      <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#modalEdit">Editar perfil <i className="fa-solid fa-user-pen"></i></button>
                  </div>
              </div>
            </div>
          </div>
        :
          ''
      }

      <div className="modal fade" id="modalEdit" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div id='modelDialog' className="modal-content">
            <div id='modalHeader'>
              <h5 className="modal-title"> <i className="fa-solid fa-triangle-exclamation text-warning"></i> Editar perfil</h5>
              <button id='btnclose' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="body-perfil">
              <form onSubmit={updateUser}>

                <div className='nombre-perfil'>
                    <p>Nombre:</p>
                    <input className='inp-perfil' type="text" name="nombre" onChange={ e=> setNombreU(e.target.value)} value={nombreU} />
                </div>
                <div className='usuario-perfil'>
                    <p>Usuario:</p>
                    <input className='inp-perfil' type="email" name="user" onChange={ e=> setEmailU(e.target.value)} value={emailU} />
                </div>
                
                <div id='modalFooter'>
                  <button type="submit" className="btn btn-warning btnModal" data-bs-dismiss="modal">Editar</button>
                  <button type="button" className="btn btn-primary btnModal" data-bs-dismiss="modal">Cancelar</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PerfilUsuario;