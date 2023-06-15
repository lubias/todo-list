import React from 'react'
import './index.scss'

function Header() {
  return (
    <div className='header'>
        <div className='header__nav-wrapper'>
            <nav className='header__nav'>
                <a className='header__nav-link'>Organização</a>
                <a className='header__nav-link header__nav-link--selected'>Tarefas</a>
            </nav>
        </div>
    </div>
  )
}

export default Header