import React, { useState, useRef } from 'react';
import arrow from '/assets/icons/arrow.svg';
import PicksCard from './picksCards';
import TopSection  from './TopSection'
import './TopPicks.css';
import Picks1 from '/assets/Picks1.png';
import Picks2 from '/assets/Picks2.png';
import Picks3 from '/assets/Picks3.png';
import Picks4 from '/assets/Picks4.png';
import Picks5 from '/assets/Picks5.png';
import Picks6 from '/assets/Picks6.png';

function NewTopIMDbCard() {
  const [picksCard, setPicksCard] = useState([
    { id: 1, title: 'Star Wars: Episode V - The Empire Strikes', cardImg: Picks1 },
    { id: 2, title: 'Spider-Man: Across the Spider-Verse', cardImg: Picks2 },
    { id: 3, title: 'Interstellar', cardImg: Picks3 },
    { id: 4, title: 'Arrival', cardImg: Picks4 },
    { id: 5, title: 'Inception', cardImg: Picks5 },
    { id: 6, title: 'The Lord of the Rings: The Two Towers', cardImg: Picks6 },
  ]);
  const scrollRef = useRef(null);
  const vw = window.visualViewport.width

  const nextBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += window.innerWidth; // 200px ga scroll qiladi, kerakli qiymatni tanlang
    }
  };

  const prevBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= window.innerWidth; // 200px ga orqaga scroll qiladi, kerakli qiymatni tanlang
    }
  };

  return (
    <div className='topPicks'>
            <TopSection 
        title="Top on IMDb this week"
        linkIcon = "" 
        onPrevClick={prevBtn}
        onNextClick={nextBtn}
        prevIcon={arrow}
        nextIcon={arrow}
      />
      <PicksCard picksCard={picksCard} scrollRef={scrollRef} />
    </div>
  );
}

export default NewTopIMDbCard;
