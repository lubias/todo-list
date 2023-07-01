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
    const tarefaSelecionada = TAREFAS_MOCK.find(tarefa => tarefa.id == props.id);
    tarefaSelecionada.nome = tarefa;
    tarefaSelecionada.descricao = descricao;
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
        <Link to={"/"}><button className="formTarefa__button" onClick={gravarTarefa}>Gravar</button></Link>
      </div>
    </form>
  );
}

export default FormTarefa;
