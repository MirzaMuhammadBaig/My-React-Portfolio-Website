import React from 'react'
import "./footer.css"
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from "react-icons/bs"
import {TbBrandFiverr} from 'react-icons/tb'
import {FaLinkedin} from "react-icons/fa"
import {FaReact} from "react-icons/fa"

const Footer = () => {
  return (
    <div className = "footer" id='footer'>
      <a href="#" className='footer__logo'>Mirza Muhammad Baig</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#tesimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.fiverr.com/mirzamuhammad68/provide-you-web3-wallet-tokens-nfts-and-smart-contract" target="_blank" rel="noreferrer"><TbBrandFiverr/></a>
        <a href="https://github.com/MirzaMuhammadBaig" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/muhammad-blockchain-developer/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://api.whatsapp.com/send?phone=923209246199" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made With React <FaReact className ="reaction"/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By <a href="https://www.linkedin.com/in/muhammad-blockchain-developer/" target="_blank" rel="noreferrer">Muhammad</a></small>
      </div>
    </div>
  )
}

export default Footer