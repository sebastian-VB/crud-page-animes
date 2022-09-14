
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styleSheets/diseñoGeneral.css';

function ListarUsuarios(){

  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState('');
  const [idU, setIdU] = useState('');

  //listar animes user
  const listUser =async()=>{
    const response = await axios.get('http://localhost:4000/lr/api/allUser');
    setUsers(response.data);
  }

  const getNameId = (id, nombre)=>{
    setNombre(nombre);
    setIdU(id);
  }

  //eliminar anime
  const deleteUser = async(id)=>{
    console.log(id);
    await axios.delete(`http://localhost:4000/lr/api/${id}`);
    listUser();
  }

  useEffect(()=>{
    listUser();

  },[]);

  return(
    <div>
      <h1 className='titulos'>Listar Usuarios</h1>
      <div className='p-5 listUsuario-back' >
        <div className='containerListUsuarios'>
          {
          users !== null
          ?
            users.map(user =>(

              user.rol !== 'admin'
              ?
                <div className='row-container' key={user.id}>
                  <div className='imageUsuario'>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='' />
                  </div>
                  <div className='content'>
                    <h5>Nombre: <span>{user.nombre}</span></h5>
                    <h5>Usuario: <span>{user.usuario}</span></h5>
                    <div className="buttons">
                      <button onClick={()=> getNameId(user.id, user.nombre)} className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#modalConfirm">Eliminar <i className="fa-sharp fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                  <div className='bannerUsuario'>
                  </div>
                </div>
              :
                ''
            ))
          :
            ''
        }
        </div>
      </div>
      

      <div className="modal fade" id="modalConfirm" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div id='modelDialog' className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel"> <i className="fa-solid fa-triangle-exclamation text-warning"></i> Eliminar usuario</h5>
                      <button id='btnclose' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      ¿Está seguro de eliminar el usuario <b>{nombre}</b>?
                  </div>
                  <div className="modal-footer">
                      <button onClick={()=>deleteUser(idU)} type="button" className="btn btn-success" data-bs-dismiss="modal">SI</button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">NO</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default ListarUsuarios;