import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div className=' header container header__container'>
      <h5>Hello I'm</h5>
      <h1>Mirza Muhammad Baig</h1>
      <h5 className='text-light'>Fullstack Blockchain Developer</h5>
      <CTA></CTA>
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" className ="imagine"/>
      </div>

      <a href="#footer" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Header