
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styleSheets/diseñoGeneral.css';

function ListarAnimesUser(){

  const [animes, setAnimes] = useState(null);

  //listar animes user
  const listAnimes =async()=>{
    const response = await axios.get('http://localhost:4000/anime/api/listAnimes');
    setAnimes(response.data);
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
                      </div>
                  </div>
              </div>
            </div>
          ))
        :
          ''
      }
    </div>
  );
}

export default ListarAnimesUser;