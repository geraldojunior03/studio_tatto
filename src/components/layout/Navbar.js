import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

import './Navbar.css'

function Navbar() {

  const classeText = 'text-white hover:text-zinc-400'
  const [click, setClick] = useState(true)

  function handleClick(){
    setClick(!click)
  }

  return (
    <header>
      <nav id="navbar" className='flex justify-around items-center absolute w-full h-24 z-50'>
        <div id="logo">
          <Link to='/' className='flex items-center text-white gap-5 text-2xl'>
            <img src={logo} alt='navbar-brand' className='w-20'/>
            <span>Studio Tatto</span>
          </Link>
        </div>
        <div id="navbar-links" className='flex'>
          <ul id="navbar-list" className='flex gap-30 text-base gap-8'>
            <li id="navbar-list-item">
              <Link className={classeText} to='/'>Página Inicial</Link>
            </li>
            <li id="navbar-list-item">
              <Link className={classeText} to='/about'>Quem somos</Link>
            </li>
            <li id="navbar-list-item">
              <Link className={classeText} to='/gallery'>Galeria</Link>
            </li>
            <li id="navbar-list-item">
              <Link className={classeText} to='/contact'>Contato</Link>
            </li>
          </ul>
          <div id="mobile-menu" className='text-white' onClick={handleClick}>
            <i className={click ? 'fa-light fa-bars' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
