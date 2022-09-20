import React from "react";
import { Link } from "react-router-dom";

function Anime({ userType, id, imagen, titulo, descripcion, getNameId }) {
  return (
    <div className="container-fluid p-5 containerPrincipalP" key={id}>
      <div className="containerListAnime">
        <div className="row-container">
          <div className="image">
            <a href="#">
              <img src={imagen} alt="" />
            </a>
          </div>
          <div className="content">
            <h2>{titulo}</h2>
            <div className="sinopsis">
              <h4>Sinopsis</h4>
              <p>{descripcion}</p>
            </div>
            {userType === 1 ? (
              <div className="buttons">
                <Link
                  to={`/modificar-animes-ad/${id}`}
                  className="btn btn-warning"
                >
                  Actualizar <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  onClick={() => getNameId(id, titulo)}
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modalConfirm"
                >
                  Eliminar <i className="fa-sharp fa-solid fa-trash"></i>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
