import "./index.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TAREFAS_MOCK } from "../../mock/tarefas.mock";

export default function ModalDelete({ descricao, acao, id_tarefa }) {
  const [deletar, setDeletar] = useState();

  useEffect(() => {
    let index = TAREFAS_MOCK.findIndex((tarefa) => tarefa.id === id_tarefa);

    TAREFAS_MOCK.splice(index, 1);
  }, [deletar]);

  return (
    <div content="modal">
      <div className="modal__container">
        <div className="modal__container-content">
          <h1 className="modal__titulo">Item deletado com sucesso</h1>
          <p className="modal__descricao"></p>
          <div className="modal__div-buttons">
            <Link to={"/"}>
              <button className="modal__button" onClick={() => setDeletar()}>
                OK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
