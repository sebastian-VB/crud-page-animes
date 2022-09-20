import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styleSheets/diseñoGeneral.css";
import User from "./User";
import ModalDialog from "./ModalDialog";

function ListarUsuarios() {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState("");
  const [idU, setIdU] = useState("");

  //listar animes user
  const listUser = async () => {
    const response = await axios.get("http://localhost:4000/lr/api/allUser");
    setUsers(response.data);
  };

  const getNameId = (id, nombre) => {
    setNombre(nombre);
    setIdU(id);
  };

  //eliminar anime
  const deleteUser = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:4000/lr/api/${id}`);
    listUser();
  };

  useEffect(() => {
    listUser();
  }, []);

  return (
    <div>
      <h1 className="titulos">Listar Usuarios</h1>
      <div className="p-5 listUsuario-back">
        <div className="containerListUsuarios">
          {users !== null
            ? users.map((user) =>
                user.rol !== "admin" ? (
                  <User
                    id={user.id}
                    nombre={user.nombre}
                    usuario={user.usuario}
                    getNameId={getNameId}
                  />
                ) : (
                  ""
                )
              )
            : ""}
        </div>
      </div>

      <ModalDialog
        textHeader="usuario"
        textQ="usuario"
        infoB={nombre}
        deleteOption={deleteUser}
        idDelete={idU}
      />
    </div>
  );
}

export default ListarUsuarios;
