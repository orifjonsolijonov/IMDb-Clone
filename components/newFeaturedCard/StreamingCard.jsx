import React, { useState, useRef } from 'react';
import PicksCard from './picksCards';
import TopSection from './TopSection';
import StrImg from '/assets/Streaming.png';
import arrow from '/assets/icons/arrow.svg';
import mobiClose from '/assets/icons/close.svg';
import mobilBtn from '/assets/mobilBtn.svg'
import './StreamingCard.css'

function StreamingCard() {
  const [picksCard, setPicksCard] = useState([
    { id: 1, title: 'The Last of Us', cardImg: StrImg },
    { id: 2, title: 'The Last of Us', cardImg: StrImg },
    { id: 3, title: 'The Last of Us', cardImg: StrImg },
    { id: 4, title: 'The Last of Us', cardImg: StrImg },
    { id: 5, title: 'The Last of Us', cardImg: StrImg },
    { id: 6, title: 'The Last of Us', cardImg: StrImg },
  ]);
  
  const [mobiBtn, setMobiBtn] = useState(mobilBtn);
  const [menuActive, setMenuActive] = useState(false);
  const scrollRef = useRef(null);

  const hamburMenu = () => {
    setMobiBtn((prev) => (prev === mobilBtn ? mobiClose : mobilBtn));
    setMenuActive((prev) => !prev);
  };

  const nextBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += window.innerWidth;
    }
  };

  const prevBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= window.innerWidth;
    }
  };

  const StrMenu = () => {
    return (
     <div className='strMenu'>
        <div className="mobiBtn" onClick={hamburMenu}>
        <img src={mobiBtn} alt="mobiBtn" />
   </div>    
 
   <div className={`mobiList ${menuActive ? 'active' : ''}`}>
   <div className='NavstrMenu'>
     <h5 className='active'>Prime Video</h5>
     <h5>Disney</h5>
     <h5>Hulu</h5>
     <h5>Netflix</h5>
     <h5>HBO Max</h5>
   </div>
 </div></div>
    );
  };

  return (
    <div className='StreamingCard'>
      <h1>Streaming Now</h1>
      <TopSection
        title={StrMenu()} // Call the function to get the JSX
        onPrevClick={prevBtn}
        onNextClick={nextBtn}
        prevIcon={arrow}
        nextIcon={arrow}
      />
      <PicksCard picksCard={picksCard} scrollRef={scrollRef} />
    </div>
  );
}

export default StreamingCard;
