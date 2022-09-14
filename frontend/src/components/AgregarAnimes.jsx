
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styleSheets/diseñoGeneral.css';

function AgregarAnimes(){

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const navigate = useNavigate();

  //agregar anime
  const addNewAnime = async(e)=>{

    e.preventDefault();
    
    try{

      await axios.post('http://localhost:4000/anime/api/addAnime', { titulo, descripcion, imagen });
      navigate('/listar-animes-ad');

    }catch(error){
      console.log(error);
    }

  }

  return(
    <div className='p-5 agrAnime-back'>
      <h1 className='titulos'>Agregar Animes</h1>

      <div className='w-100 mt-5'>
        <form className='w-50 d-flex flex-column align-items-start mx-auto' onSubmit={addNewAnime}>

          <div className="mb-3 w-100 d-flex flex-column align-items-start">
            <label for="inputNombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="inputNombre" required onChange={ e=> setTitulo(e.target.value)} value={titulo} />
          </div>
          <div className="mb-3 w-100 d-flex flex-column align-items-start">
            <label for="inputDesc" className="form-label">Descripción</label>
            <textarea className="form-control" id="inputDesc" required onChange={ e=> setDescripcion(e.target.value)} value={descripcion} />
            {/* <input type="text" class="form-control " id="inputPorcion" required/> */}
          </div>
          <div className="mb-3 w-100 d-flex flex-column align-items-start">
            <label for="inputImage" className="form-label">Imagen</label>
            <input type="text" className="form-control" id="inputImage" required onChange={ e=> setImagen(e.target.value) } value={imagen} />
          </div>

          <button id="btns" type="submit" className="btn">Guardar</button>

        </form>
      </div>
    </div>
  );
}

export default AgregarAnimes;