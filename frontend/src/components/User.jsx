import React from "react";

function User({ id, nombre, usuario, getNameId }) {
  return (
    <div className="row-container" key={id}>
      <div className="imageUsuario">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
      </div>
      <div className="content">
        <h5>
          Nombre: <span>{nombre}</span>
        </h5>
        <h5>
          Usuario: <span>{usuario}</span>
        </h5>
        <div className="buttons">
          <button
            onClick={() => getNameId(id, nombre)}
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modalConfirm"
          >
            Eliminar <i className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div className="bannerUsuario"></div>
    </div>
  );
}

export default User;
