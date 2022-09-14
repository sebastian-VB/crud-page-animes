
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styleSheets/diseñoGeneral.css';

function ActualizarAnimes(){

  const {id} = useParams();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const navigate = useNavigate();

  //obetener un anime
  const getOnlyAnime = async()=>{

    const response = await axios.get(`http://localhost:4000/anime/api/anime/${id}`);
    setTitulo(response.data.anime.titulo);
    setDescripcion(response.data.anime.descripcion);
    setImagen(response.data.anime.imagen);
  }

  const updateAnime = async(e)=>{

    e.preventDefault();
    await axios.put(`http://localhost:4000/anime/api/updAnime/${id}`, { titulo, descripcion, imagen });
    navigate('/listar-animes-ad');
  }

  useEffect(()=>{
    getOnlyAnime();
  },[]);

  //actualizar el anime

  return(
    <div className='p-5 actAnime-back'>
      <h1 className='titulos'>Actualizar Anime</h1>

      <div className='w-100 mt-5'>
        <form className='w-50 d-flex flex-column align-items-start mx-auto' onSubmit={updateAnime}>

          <div className="mb-3 w-100 d-flex flex-column align-items-start">
            <label for="inputNombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="inputNombre" required onChange={ e=> setTitulo(e.target.value)} value={titulo} />
          </div>
          <div className="mb-3 w-100 d-flex flex-column align-items-start">
            <label for="inputDesc" className="form-label">Descripcin</label>
            <textarea className="form-control" id="inputDesc" required onChange={ e=> setDescripcion(e.target.value)} value={descripcion} />
          </div>
          <div className="mb-3 w-100 d-flex flex-column align-items-start">
            <label for="inputImage" className="form-label">Imagen</label>
            <input type="text" className="form-control" id="inputImage" required onChange={ e=> setImagen(e.target.value) } value={imagen} />
          </div>

          <button id="btns" type="submit" className="btn">Actualizar</button>

        </form>
      </div >

    </div >

  );
}

export default ActualizarAnimes;