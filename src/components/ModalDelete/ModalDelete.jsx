import "./index.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TAREFAS_MOCK } from "../../mock/tarefas.mock";

export default function ModalDelete({ descricao, acao, id_tarefa }) {
  const [deletar, setDeletar] = useState();
  let index = TAREFAS_MOCK.filter((tarefa) => tarefa.id !== id_tarefa);

  useEffect(() => {
    TAREFAS_MOCK.splice(0, 1);
    TAREFAS_MOCK.push(index[0]);
    console.log(TAREFAS_MOCK);
  }, [deletar]);

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
              <button className="modal__button" onClick={setDeletar}>
                Sim
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
