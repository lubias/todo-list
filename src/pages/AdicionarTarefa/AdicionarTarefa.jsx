import FormTarefa from "../../components/FormTarefa/FormTarefa"
import Header from "../../components/Header/Header"

function AdicionarTarefa() {
  return (
    <>
        <Header />
        <div className='editar'>
            <h1 className='editar__titulo'>Adicionar tarefa</h1>
        </div>
        <FormTarefa tarefa={''}/>
    </>
  )
}

export default AdicionarTarefa