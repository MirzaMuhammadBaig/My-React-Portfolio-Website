import React from 'react'
import "./portfolio.css"
import IMGj from "../../assets/land.jpg"
import IMG2 from "../../assets/nft.jpg"
import IMG3 from "../../assets/wallet.jpg"
import IMG4 from "../../assets/park.jpg"
import IMG5 from "../../assets/blk.jpg"
import IMG6 from "../../assets/pool.jpg"
import IMG7 from "../../assets/flash.png"
import IMG8 from "../../assets/crowd.jpg"
import IMG9 from "../../assets/token.jpeg"
import IMG10 from "../../assets/ico.jpg"
import IMG11 from "../../assets/qms.jpg"
import IMG12 from "../../assets/store.jpeg"

const data = [
  {
    id: 1,
    imaage: IMG4,
    title: "Parking Dapp",
    Github: "https://github.com/MirzaMuhammadBaig/Parking-DAPP",
    demo: "https://github.com/MirzaMuhammadBaig/Parking-DAPP"
  },
  {
    id: 2,
    imaage: IMG2,
    title: "Special NFT Marketplace",
    Github: "https://github.com/MirzaMuhammadBaig/Special-NFT-Market-Place",
    demo: "https://github.com/MirzaMuhammadBaig/Special-NFT-Market-Place"
  },
  {
    id: 3,
    imaage: IMG3,
    title: "Multi-Signature Wallet",
    Github: "https://github.com/MirzaMuhammadBaig/Multi-Signature-Wallet",
    demo: "https://github.com/MirzaMuhammadBaig/Multi-Signature-Wallet"
  },
  {
    id: 4,
    imaage: IMGj,
    title: "Blockchain based Land Registry System",
    Github: "https://github.com/MirzaMuhammadBaig/Blockchain-based-Land-Registry-System",
    demo: "https://github.com/MirzaMuhammadBaig/Blockchain-based-Land-Registry-System"
  },
  {
    id: 5,
    imaage: IMG5,
    title: "Create Blockchain Using Javascript",
    Github: "https://github.com/MirzaMuhammadBaig/Create-Blockchain-From-Scratch",
    demo: "https://github.com/MirzaMuhammadBaig/Create-Blockchain-From-Scratch"
  },
  {
    id: 6,
    imaage: IMG6,
    title: "Get Pools Feeds From Different Dexs",
    Github: "https://github.com/MirzaMuhammadBaig/Get-Pool-Feeds-From-different-dexs",
    demo: "https://github.com/MirzaMuhammadBaig/Get-Pool-Feeds-From-different-dexs"
  },
  {
    id: 7,
    imaage: IMG7,
    title: "Defi - Flash Loan Smart Contract",
    Github: "https://github.com/MirzaMuhammadBaig/DeFi--Create-a-Flash-Loan-contract-using-Aave",
    demo: "https://github.com/MirzaMuhammadBaig/DeFi--Create-a-Flash-Loan-contract-using-Aave"
  },
  {
    id: 9,
    imaage: IMG9,
    title: "TokenLuncher Airdrop Contract ",
    Github: "https://github.com/MirzaMuhammadBaig/TokenLuncher-Airdrop",
    demo: "https://github.com/MirzaMuhammadBaig/TokenLuncher-Airdrop"
  },
  {
    id: 8,
    imaage: IMG8,
    title: "Crowd Funding Contract",
    Github: "https://github.com/MirzaMuhammadBaig/Crowd-Funding-Contract",
    demo: "https://github.com/MirzaMuhammadBaig/Crowd-Funding-Contract"
  },
  {
    id: 10,
    imaage: IMG10,
    title: "Presale or ICO Smart Contract",
    Github: "https://github.com/MirzaMuhammadBaig/Presale-or-initial-coin-offering-ICO",
    demo: "https://github.com/MirzaMuhammadBaig/Presale-or-initial-coin-offering-ICO"
  },
  {
    id: 11,
    imaage: IMG11,
    title: "Query Management System",
    Github: "https://github.com/MirzaMuhammadBaig/Query-Management-System",
    demo: "https://github.com/MirzaMuhammadBaig/Query-Management-System"
  },
  {
    id: 12,
    imaage: IMG12,
    title: "Ecommerce Store",
    Github: "https://github.com/MirzaMuhammadBaig/ecommerce-store",
    demo: "https://github.com/MirzaMuhammadBaig/ecommerce-store"
  }
]

const Portfolio = () => {
  return (
    <div className='section' id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, imaage, title, Github, demo}) => {
          return (
            <article key={id} className = "portfolio__item">
          <div className="portfolio__item-image">
            <img src={imaage} alt={title} />
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={Github} className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
          )
        })
      }
      </div>
    </div>
  )
}

export default Portfolio