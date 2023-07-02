import "./index.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TAREFAS_MOCK } from "../../mock/tarefas.mock";

export default function ModalDelete({ descricao, acao, id_tarefa }) {
  useEffect(() => {
    let index = TAREFAS_MOCK.findIndex((tarefa) => tarefa.id === id_tarefa);

    TAREFAS_MOCK.splice(index, 1);
  }, []);

  return (
    <div content="modal">
      <div className="modal__container">
        <div className="modal__container-content">
          <h1 className="modal__titulo">Deseja {acao} esse item?</h1>
          <p className="modal__descricao">{descricao}</p>
          <div className="modal__div-buttons">
            <Link to={"/"}>
              <button className="modal__button modal__button-blue">Não</button>
            </Link>
            <Link to={"/"}>
              <button className="modal__button">
                Sim
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
