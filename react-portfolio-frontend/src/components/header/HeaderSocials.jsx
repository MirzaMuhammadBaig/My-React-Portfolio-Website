import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {TbBrandFiverr} from 'react-icons/tb'

const HeaderSocials = () => (
    <div className='header__socials'>
            <a href="https://www.linkedin.com/in/muhammad-blockchain-developer/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/MirzaMuhammadBaig" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
            <a href="https://www.fiverr.com/mirzamuhammad68" target="_blank" rel="noreferrer"><TbBrandFiverr/></a>
    </div>
)

export default HeaderSocials