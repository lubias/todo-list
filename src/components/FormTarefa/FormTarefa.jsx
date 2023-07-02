import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import { TAREFAS_MOCK } from "../../mock/tarefas.mock";

function FormTarefa(props) {
  const [tarefa, setTarefa] = useState(props.tarefa);
  const [descricao, setDescricao] = useState(props.descricao);

  const handleChangeTarefa = (event) => {
    setTarefa(event.target.value);
  };

  const handleChangeDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const gravarTarefa = () => {
    if(props.id != 0){
      const tarefaSelecionada = TAREFAS_MOCK.find(
        (tarefa) => tarefa.id == props.id
      );
  
      if (typeof tarefaSelecionada !== "null") {
        tarefaSelecionada.nome = tarefa;
        tarefaSelecionada.descricao = descricao;
      }
    }else{
      let id = TAREFAS_MOCK[TAREFAS_MOCK.length - 1].id + 1;

      let obj = {
        "id":id,
        "nome":tarefa,
        "descricao":descricao,
        "status":false
      }
      TAREFAS_MOCK.push(obj);
    }
  };

  return (
    <form className="formTarefa">
      <div className="formTarefa__div-input">
        <label>Tarefa: </label>
        <input
          type="text"
          placeholder="Regar plantas"
          defaultValue={tarefa}
          onChange={handleChangeTarefa}
        />
      </div>
      <div className="formTarefa__div-input">
        <label>Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="4"
          cols="50"
          defaultValue={props.descricao}
          onChange={handleChangeDescricao}
        ></textarea>
      </div>
      <div className="formTarefa__div-buttons">
        <Link to={"/"}>
          <button className="formTarefa__button formTarefa__button-blue">
            Cencelar
          </button>
        </Link>
        <Link to={"/"}>
          <button className="formTarefa__button" onClick={gravarTarefa}>
            Gravar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default FormTarefa;
