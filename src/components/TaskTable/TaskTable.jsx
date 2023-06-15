import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.scss";
import Modal from "../Modal/Modal";
import ModalAdicionar from "../ModalAdicionar/ModalAdicionar";

function TaskTable() {
  const [data, setData] = useState([
    {
      id: 1,
      nome: "Limpar a casa",
      status: false,
    },
    {
      id: 2,
      nome: "Responder e-mails",
      status: false,
    },
  ]);

  const [newTask, setNewTask] = useState(null);
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <div className="taskTable">
      <div className="taskTable__container">
        <table id="table" className="taskTable__table">
          <thead>
            <tr>
              <th className="taskTable__align-start taskTable__w4">Tarefa</th>
              <th className="taskTable__align-center taskTable__w4">Status</th>
              <th className="taskTable__align-center taskTable__w2">Opções</th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr key={`tarefa_${task.id}`}>
                <th className="taskTable__align-start taskTable__w4">{task.nome}</th>
                <th className="taskTable__align-center taskTable__w4"><input type="checkbox" className="taskTable__checkbox" onClick={ () => {
                  if(task.id == 1){
                    handleChangeOne()
                  }else{
                    handleChangeTwo()
                  }
                }} /></th>
                <th className="taskTable__align-center taskTable__w2">
                  <div className="taskTable__icones">
                    <Modal descricao={task.nome} icon={faPencil} acao={"editar"} />
                    <Modal descricao={task.nome} icon={faTrash} acao={"excluir"} />
                  </div>
                </th>
              </tr>
            ))}
            <tr>
              <td className="taskTable__align-start taskTable__italic">
                Nova tarefa...
              </td>
              <td className="taskTable__align-center"></td>
              <td className="taskTable__align-center taskTable__italic taskTable__plus">
                <ModalAdicionar />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskTable;
