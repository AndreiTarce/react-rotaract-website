import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import logo from '../../assets/visio.png'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <img src={logo} alt="" id="logo" />
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href="#proiecte" onClick={() => setActiveNav('#proiecte')} className={activeNav === '#proiecte' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#membri" onClick={() => setActiveNav('#membri')} className={activeNav === '#membri' ? 'active' : ''}><FaUserFriends /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
    
  )
}

export default Nav