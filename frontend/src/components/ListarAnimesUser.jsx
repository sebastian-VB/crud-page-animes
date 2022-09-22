import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styleSheets/diseñoGeneral.css";
import Anime from "./Anime";

function ListarAnimesUser() {
  const [animes, setAnimes] = useState(null);

  //listar animes user
  const listAnimes = async () => {
    const response = await axios.get(
      "http://localhost:4000/anime/api/listAnimes"
    );
    setAnimes(response.data);
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
              userType={0}
              id={anime.id}
              imagen={anime.imagen}
              titulo={anime.titulo}
              descripcion={anime.descripcion}
            />
          ))
        : ""}
    </div>
  );
}

export default ListarAnimesUser;
