import React from 'react'
import './Header.css'

export const Header = () => {
  return (
  <header className="header">


    <a href="" className="logo"></a>
    <img src="/eddie.png.png" alt="" className="eddie" />
    
    

    <nav className="navbar">
        <a href="/">Inicio</a>
        <a href="/">Acerca</a>
        <a href="/">Guitarras</a>
        <a href="/">Contacto</a>
    </nav>
  </header>
  )
}
export default Header
