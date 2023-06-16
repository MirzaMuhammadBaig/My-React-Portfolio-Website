import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpeg"
import { FaAward } from "react-icons/fa"
import { AiFillFolderOpen } from "react-icons/ai"

const About = () => {
  return (
    <div className='section' id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-img" className="image2" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Working epxerience</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>

          <p>
          I am a highly skilled Fullstack Blockchain Developer with expertise in developing dynamic and engaging websites. I have completed web development training at Suffa Computer Education (SCE) and obtained a blockchain development bootcamp certification from the Institute of Emerging Career (IEC). Additionally, I am a certified Ethereum blockchain developer through Udemy and have completed a blockchain specialization from the University of Buffalo (UB) via Coursera. With a comprehensive educational background and practical experience, I am passionate about leveraging blockchain technology to build innovative DApps, Smart Contracts, DeFi solutions, NFT ecosystems, and contribute to the decentralized future.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </div>
  )
}

export default About