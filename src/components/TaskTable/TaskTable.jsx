import { faPencil, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.scss";
import Modal from "../Modal/Modal";
import ModalDelete from "../ModalDelete/ModalDelete";
import { Link } from "react-router-dom";

function TaskTable({ data }) {
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
                <th className="taskTable__align-start taskTable__w4">
                  {task.nome}
                </th>
                <th className="taskTable__align-center taskTable__w4">
                  <input
                    type="checkbox"
                    className="taskTable__checkbox"
                    onClick={() => {
                      if (task.id == 1) {
                        handleChangeOne();
                      } else {
                        handleChangeTwo();
                      }
                    }}
                  />
                </th>
                <th className="taskTable__align-center taskTable__w2">
                  <div className="taskTable__icones">
                    <Modal
                      descricao={task.nome}
                      icon={faPencil}
                      acao={"editar"}
                      id_tarefa={task.id}
                    />
                    <Link to={`/deletar/${task.id}`}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="taskTable__icon"
                      />
                    </Link>
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
                <Link to="/adicionar">
                  <FontAwesomeIcon icon={faPlus} className="taskTable__icon" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskTable;
