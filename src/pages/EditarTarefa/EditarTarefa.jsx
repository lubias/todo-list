import { useParams } from "react-router-dom";
import FormTarefa from "../../components/FormTarefa/FormTarefa"
import Header from "../../components/Header/Header"
import './index.scss';

function EditarTarefa({ data }) {
  const { id } = useParams();
  const tarefaSelecionada = data.find(tarefa => tarefa.id == id);

  return (
    <>
        <Header />
        <div className='editar'>
            <h1 className='editar__titulo'>Editar tarefa</h1>
        </div>
        <FormTarefa tarefa={tarefaSelecionada.nome} descricao={tarefaSelecionada.descricao} id={tarefaSelecionada.id}/>
    </>
  )
}

export default EditarTarefa