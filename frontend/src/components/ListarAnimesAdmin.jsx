import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styleSheets/diseñoGeneral.css";
import Anime from "./Anime";
import ModalDialog from "./ModalDialog";

function ListarAnimesAdmin() {
  const [animes, setAnimes] = useState(null);
  const [tituloAnime, setTituloAnime] = useState("");
  const [idAnime, setIdAnime] = useState("");

  //listar animes user
  const listAnimes = async () => {
    const response = await axios.get(
      "http://localhost:4000/anime/api/listAnimes"
    );
    setAnimes(response.data);
  };

  //eliminar anime
  const deleteAnime = async (id) => {
    await axios.delete(`http://localhost:4000/anime/api/delAnime/${id}`);
    listAnimes();
  };

  const getNameId = (id, nameAnime) => {
    setTituloAnime(nameAnime);
    setIdAnime(id);
  };

  useEffect(() => {
    listAnimes();
  }, []);

  return (
    <div>
      <h1 className="titulos">Listar Animes</h1>
      {animes !== null
        ? animes.map((anime) => (
            <Anime
              userType={1}
              id={anime.id}
              imagen={anime.imagen}
              titulo={anime.titulo}
              descripcion={anime.descripcion}
              getNameId={getNameId}
            />
          ))
        : ""}

      <ModalDialog
        textHeader="anime"
        textQ="anime"
        infoB={tituloAnime}
        deleteOption={deleteAnime}
        idDelete={idAnime}
      />
    </div>
  );
}

export default ListarAnimesAdmin;
