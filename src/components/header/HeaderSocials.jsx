import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin color="white" size="30px"/></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook color="white" size="30px"/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram color="white" size="30px"/></a>
        </div>
  )
}

export default HeaderSocials