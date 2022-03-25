import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/club2.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Rotaract Visio</h1>
        <h2>Cluj-Napoca</h2>
        <CTA />
        <div className="me"><img src={me} alt="" /></div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header