import React from 'react';
import './picksCards.css';
import starYellow from '/assets/starYellow.svg';
import starDark from '/assets/starDark.svg';
import infoDark from '/assets/infoDark.svg';

function picksCards({ picksCard, scrollRef }) {
  return (
    <div className='picksCards' ref={scrollRef}>
      {picksCard.map((picture, index) => (
        <div id='card' key={index} className='slide'>
          <img key={picture.id} className='cardImg' src={picture.cardImg} alt={picture.title} />
          <h3>{picture.title}</h3>
          <div className="cardReyting">
            <span><img src={starYellow} alt="starYellow" />8.7</span>
            <span><img src={starDark} alt="starDark" />Rate</span>
            <img src={infoDark} alt="infoBtn" />
          </div>
          <div className='cardBtn'>
             {picture.button && <img key={picture.id} src={picture.button} alt={picture.title} />} 
          </div>
        </div>
      ))}
    </div>
  );
}

export default picksCards;
