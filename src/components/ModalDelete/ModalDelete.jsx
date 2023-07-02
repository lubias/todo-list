import "./index.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TAREFAS_MOCK } from "../../mock/tarefas.mock";

export default function ModalDelete({ descricao, acao, id_tarefa }) {
  useEffect(() => {
    let index = TAREFAS_MOCK.findIndex((tarefa) => tarefa.id === id_tarefa);

    TAREFAS_MOCK.splice(index, 1);
    console.log(TAREFAS_MOCK);
  }, []);

  return (
    <Link to={"/"}><button style={{color: "white"}}>Item deletado</button></Link>
  );
}
