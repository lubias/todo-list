import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Modal({ descricao, icon, acao, id_tarefa }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      content="modal"
      onClick={() => {
        if (showModal) setShowModal(false);
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        className="taskTable__icon"
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <div className="modal__container">
          <div className="modal__container-content">
            <h1 className="modal__titulo">Deseja {acao} esse item?</h1>
            <p className="modal__descricao">{descricao}</p>
            <div className="modal__div-buttons">
              <button className="modal__button modal__button-blue">Não</button>
              <Link to={`editar/${id_tarefa}`}>
                <button className="modal__button">Sim</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
