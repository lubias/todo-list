import React from 'react'
import Header from '../../components/Header/Header'
import TaskTable from '../../components/TaskTable/TaskTable'
import './index.scss'

function Home({data}) {
  return (
    <div>
        <Header />
        <div className='home'>
            <h1 className='home__titulo'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        </div>
        <TaskTable data={data}/>
    </div>
  )
}

export default Home