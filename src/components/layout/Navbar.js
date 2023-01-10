import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

import './Navbar.css'

function Navbar() {
  const navbar = document.getElementById("navbar")

  const [fix, setFix] = useState(false)
  const [click, setClick] = useState(true)

  function handleClick(){
    setClick(!click)
    console.log(click)
  }

  function navbarClick(){
    if (navbar.classList.contains('active') === true) {
      setClick(!click)
      console.log(click)
    }
  }

  function scrollNavbar(){
    if (window.scrollY >= 1){
      setFix(true)
    }
    else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', scrollNavbar)

  return (
    <header>
      <nav id="navbar" className={`${click ? '' : 'active'} ${fix ? 'fixed' : ''}`}>
        <div>
          <Link to='/' id="logo">
            <img src={logo} alt='navbar-brand'/>
            <span>Studio Tatto</span>
          </Link>
        </div>
        <div id="navbar-links">
          <ul id="navbar-list">
            <li>
              <Link onClick={navbarClick} id="navbar-list-item" to='/'>Página Inicial</Link>
            </li>
            <li>
              <Link onClick={navbarClick} id="navbar-list-item" to='/sobre-nos'>Quem somos</Link>
            </li>
            <li>
              <Link onClick={navbarClick} id="navbar-list-item" to='/galeria'>Galeria</Link>
            </li>
            <li>
              <Link onClick={navbarClick} id="navbar-list-item" to='/contato'>Contato</Link>
            </li>
          </ul>
          <div id="btnMobile" onClick={handleClick}>
            <i className={click ? 'fas fa-bars' : 'fa-solid fa-xmark'} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
