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
            <h3>Frontend Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Offer comprehensive frontend development services.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Responsive Web Design, ensuring a seamless user experience.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>UI/UX Design using CSS frameworks like Bootstrap, Tailwind, and Material-UI.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Build Single Page Applications (SPAs) using React JS and Next JS.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Using Redux-toolkit to manage the state of your frontend applications efficiently.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Provide integration services for CMS platforms like WordPress, Wix, and WebFlow.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Develop custom web applications using React JS, Next JS, and other frontend technologies.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Website Performance Optimization to improve website speed and performance.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Offer ongoing maintenance and support services for frontend applications.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Backend Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Build and deploy scalable web applications using Node.js, Express.js, and MongoDB for data storage.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Create robust and secure REST APIs using Node.js, Express.js, and MongoDB for data management.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Real-time Data Synchronization using Firebase's real-time database.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Serverless Application Development using Firebase.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Implement and manage MongoDB and MySQL databases.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Integrate third-party APIs into your backend services to access external functionalities</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Extensive ecosystem for enhanced backend capabilities from php and python.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Implement caching strategies, database indexing, and code optimizations to improve your backend services.</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Blockchain Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Provide services to develop, and optimize smart contracts for various use cases.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Build decentralized applications that interact with smart contracts on the Ethereum blockchain.
              </p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Complete integration between contract, wallet and front-end.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>I provide comprehensive services for NFT marketplaces.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Offer services for testing, debugging, and deploying smart contracts on the Ethereum network using Hardhat, Mocha, and Truffle.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Deploying to testnets/mainnet using Infura or Alchemy.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Provide security audits, bug fix, code reviews, and vulnerability assessments for blockchain projects.</p>
            </li>
            <li>
              <BsCheck className='sercice__list-icon' />
              <p>Provide services to integrate IPFS and pinata with blockchain applications for storing files and data.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </div>
  )
}

export default Services