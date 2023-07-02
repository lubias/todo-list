import React from 'react'
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

function DeletarTarefa({data}) {
const { id } = useParams();
const tarefaSelecionada = data.find(tarefa => tarefa.id == id);


  return (
    <>
        <ModalDelete descricao={tarefaSelecionada.nome} icon={faTrash} acao={"excluir"} id_tarefa={tarefaSelecionada.id}/>
    </>
  )
}

export default DeletarTarefa