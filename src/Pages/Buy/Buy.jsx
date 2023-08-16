import React from 'react'
import Navbar from '../../Components/NavBar/NavBar'
import Page6 from '../../Components/Page6/Page6'

const cardsData = [
  {
    title: 'Calculate',
    imgSrc: 'https://media.tenor.com/je0hGh4sbVwAAAAC/calculator.gif',
    Content:'huuuuhu',
    price: 'Buy @23 ETH',
  },
  {
    title: 'Save',
    imgSrc: 'https://media.tenor.com/AiwESKPkmjIAAAAC/downsign-ozone-layer.gif',
    Content:'huuuuhu',
    price: 'Buy @23 ETH',
  },
  {
    title: 'Calculate',
    imgSrc: 'https://media.tenor.com/je0hGh4sbVwAAAAC/calculator.gif',
    Content:'huuuuhu',
    price: 'Buy @23 ETH',
  },
  {
    title: 'Calculate',
    imgSrc: 'https://media.tenor.com/je0hGh4sbVwAAAAC/calculator.gif',
    Content:'huuuuhu',
    price: 'Buy @23 ETH',
  },
  {
    title: 'Save',
    imgSrc: 'https://media.tenor.com/AiwESKPkmjIAAAAC/downsign-ozone-layer.gif',
    Content:'huuuuhu',
    price: 'Buy @23 ETH',
  },
  {
    title: 'Calculate',
    imgSrc: 'https://media.tenor.com/je0hGh4sbVwAAAAC/calculator.gif',
    Content:'huuuuhu',
    price: 'Buy @23 ETH',
  }, 
  
  
];

const Card = ({ title, imgSrc, price, Content }) => (
  <div className="cards">
    <div className="hoverarea">
      <img src="https://github.com/Xokhezi/Instagram-camping-card/blob/main/tree.png?raw=true" className="img-tree--left" alt="" />
      <img src="https://github.com/Xokhezi/Instagram-camping-card/blob/main/tree.png?raw=true" className="img-tree--right" alt="" />
      <div className="card card-camping">
        <h1>{title}</h1>
        <img src={imgSrc} className="img-tent" alt="" />
        <h3 className='content'>{Content}</h3>
        <button className='dummy'>{price}</button>
      </div>
    </div>
  </div>
);

export default function Buy() {
  return (
    <div className='Buy'>
        <Navbar />
        <div className='ppage6'>
            <Page6 />
        </div>

      <div className="page3">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

    </div>
  )
}
