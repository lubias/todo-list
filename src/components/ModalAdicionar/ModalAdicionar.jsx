import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { useState } from "react";

export default function ModalAdicionar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div content="modal">
      <FontAwesomeIcon
        icon={faPlus}
        className="taskTable__icon"
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <div className="modal__container">
          <div className="modal__container-content">
            <h1 className="modal__titulo">Adicionar nova tarefa</h1>
            <input
              type="text"
              id="nome"
              className="modal__input"
              placeholder="Editar vídeo para o canal..."
            />
            <div className="modal__div-buttons">
              <button
                className="modal__button modal__button-blue"
                onClick={() => {
                  if (showModal) setShowModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                className="modal__button"
                onClick={() => {
                  if (showModal) setShowModal(false);
                }}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
