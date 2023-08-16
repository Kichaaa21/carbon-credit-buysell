import React from 'react';
import './page3.css';

const cardsData = [
  {
    title: 'Calculate',
    imgSrc: 'https://media.tenor.com/je0hGh4sbVwAAAAC/calculator.gif',
    description: 'Calculate your carbon footprint.',
  },
  {
    title: 'Sign up',
    imgSrc: 'https://media.tenor.com/aRJe6lmQUqUAAAAd/sign-up-register.gif',
    description: 'Sign up and Buy or Sell Carbon.',
  },
  {
    title: 'Save',
    imgSrc: 'https://media.tenor.com/AiwESKPkmjIAAAAC/downsign-ozone-layer.gif',
    description: 'Save our Planet by reducing carbon.',
  },
];

const Card = ({ title, imgSrc, description }) => (
  <div className="cards">
    <div className="hoverarea">
      <img src="https://github.com/Xokhezi/Instagram-camping-card/blob/main/tree.png?raw=true" className="img-tree--left" alt="" />
      <img src="https://github.com/Xokhezi/Instagram-camping-card/blob/main/tree.png?raw=true" className="img-tree--right" alt="" />
      <div className="card card-camping">
        <h1>{title}</h1>
        <img src={imgSrc} className="img-tent" alt="" />
        <h3 className='dummy'>{description}</h3>
      </div>
    </div>
  </div>
);

export default function Page3() {
  return (
    <div>
      <h1 className="bythis"> ву тнιѕ ѕιтє уσυ ¢αη::</h1>

      <div className="page3">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
