import React from 'react'
import "./services.css"
import { BsCheck } from "react-icons/bs"

const Services = () => {
  return (
    <div className='section' id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

      <article className='service'>
          <div className="service__head">
            <h3>Blockchain Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Writing and deploying smart contracts on various blockchain platforms.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Integrating Web3 technologies to interact with blockchain networks.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Building decentralized applications (DApps) using Web3 libraries.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Creating and implementing custom cryptocurrencies or tokens.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Complete integration between contract, wallet and front-end.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Building wallets and payment systems for digital currencies.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Auditing and optimizing smart contract code.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>I provide comprehensive services for NFT marketplaces.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Implementing best practices for secure and reliable blockchain solutions.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Backend development using Node.js for blockchain and decentralized applications.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Setting up and configuring blockchain infrastructure using tools like Ganache, Infura, or Alchemy.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Provide services to integrate IPFS and pinata with blockchain applications for storing files and data.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Provide testing, security audits, bug fix, code reviews, and vulnerability assessments for smart contracts.</p>
            </li>
          </ul>
        </article>

        {/* END OF Blockchain */}

        <article className='service'>
          <div className="service__head">
            <h3>Frontend Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Responsive Web Design, ensuring a seamless user experience.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Build Single Page Applications (SPAs) using React JS and Next JS.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Offer ongoing maintenance and support services for frontend applications.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>UI/UX Design using CSS frameworks like Bootstrap, Tailwind, and Material-UI.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Website Performance Optimization to improve website speed and performance.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Using Redux-toolkit to manage the state of your frontend applications efficiently.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Develop custom web applications using React JS, Next JS, and other frontend technologies.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Frontend */}

        <article className='service'>
          <div className="service__head">
            <h3>Backend Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Implement and manage MongoDB database.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Integrate third-party APIs into your backend services to access external functionalities.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Create robust and secure REST APIs using Node.js, Express.js, and MongoDB for data management.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Build and deploy scalable web applications using Node.js, Express.js, and MongoDB for data storage.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Implement caching strategies, database indexing, and code optimizations to improve your backend services.</p>
            </li>
          </ul>
        </article>

        {/* END OF Backend */}
        
      </div>
    </div>
  )
}

export default Services