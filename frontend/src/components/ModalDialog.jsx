import React from "react";

function ModalDialog({ textHeader, textQ, infoB, deleteOption, idDelete }) {
  return (
    <div
      className="modal fade"
      id="modalConfirm"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div id="modelDialog" className="modal-content">
          <div id="modalHeader">
            <h5 className="modal-title">
              {" "}
              <i className="fa-solid fa-triangle-exclamation text-warning"></i>{" "}
              Eliminar {textHeader}
            </h5>
            <button
              id="btnclose"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            ¿Está seguro de eliminar el {textQ} <b>{infoB}</b>?
          </div>
          <div id="modalFooter">
            <button
              onClick={() => deleteOption(idDelete)}
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              SI
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDialog;
