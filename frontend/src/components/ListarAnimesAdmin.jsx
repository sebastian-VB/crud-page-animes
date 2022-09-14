
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListarAnimesAdmin(){

  const [animes, setAnimes] = useState(null);
  const [tituloAnime, setTituloAnime] = useState('');
  const [idAnime, setIdAnime] = useState('');

  //listar animes user
  const listAnimes =async()=>{
    const response = await axios.get('http://localhost:4000/anime/api/listAnimes');
    setAnimes(response.data);
  }

  //eliminar anime
  const deleteAnime = async(id)=>{
    await axios.delete(`http://localhost:4000/anime/api/delAnime/${id}`);
    listAnimes();
  }

  const getNameId = (id, nameAnime)=>{
    setTituloAnime(nameAnime);
    setIdAnime(id);
  }

  useEffect(()=>{
    listAnimes();
  },[]);


  return(
    <div>
      <h1 className='titulos'>Listar Animes</h1>
      {
        animes !== null
        ?
          animes.map(anime =>(
            <div className='container-fluid p-5 containerPrincipalP' key={anime.id}>
              <div className='containerListAnime'>
                  <div className='row-container'>
                      <div className='image'>
                          <a href='#'>
                              <img src={anime.imagen} alt= '' />
                          </a>
                      </div>
                      <div className='content'>
                          <h2>{anime.titulo}</h2>
                          <div className='sinopsis'>
                              <h4>Sinopsis</h4>
                              <p>
                                  {anime.descripcion}
                              </p>
                          </div>
                          <div className="buttons">
                              <Link to='/modificar' className='btn btn-warning'>Actualizar <i className="fa-solid fa-pen-to-square"></i></Link>
                              {/* <button className='btn btn-warning'>Actualizar <i className="fa-solid fa-pen-to-square"></i></button> */}
                              <button onClick={()=> getNameId(anime.id, anime.titulo)} className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#modalConfirm">Eliminar <i className="fa-sharp fa-solid fa-trash"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          ))
        :
          ''
      }

      <div className="modal fade" id="modalConfirm" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div id='modelDialog' className="modal-content">
            <div id='modalHeader'>
              <h5 className="modal-title"> <i className="fa-solid fa-triangle-exclamation text-warning"></i> Eliminar anime</h5>
              <button id='btnclose' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ¿Está seguro de eliminar el anime <b>{tituloAnime}</b>?
            </div>
            <div id='modalFooter'>
              <button onClick={()=> deleteAnime(idAnime)} type="button" className="btn btn-danger btnModal" data-bs-dismiss="modal">Eliminar</button>
              <button type="button" className="btn btn-primary btnModal" data-bs-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ListarAnimesAdmin;