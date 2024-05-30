import React, { useState, useRef } from 'react';
import arrow from '/assets/icons/arrow.svg';
import LinkArrow from '/assets/icons/linkArrow.svg';
import PicksCard from './picksCards'
import TopSection  from './TopSection'
import './TopPicks.css'
import Picks1 from '/assets/Picks1.png';
import Picks2 from '/assets/Picks2.png';
import Picks3 from '/assets/Picks3.png';
import Picks4 from '/assets/Picks4.png';
import Picks5 from '/assets/Picks5.png';
import Picks6 from '/assets/Picks6.png';

function TopPicks() {
  const [picksCard, setPicksCard] = useState([
    { id: 1, title: 'Star Wars: Episode V - The Empire Strikes', cardImg: Picks1 },
    { id: 2, title: 'Spider-Man: Across the Spider-Verse', cardImg: Picks2 },
    { id: 3, title: 'Interstellar', cardImg: Picks3 },
    { id: 4, title: 'Arrival', cardImg: Picks4 },
    { id: 5, title: 'Inception', cardImg: Picks5 },
    { id: 6, title: 'The Lord of the Rings: The Two Towers', cardImg: Picks6 },
    { id: 7, title: 'Inception', cardImg: Picks5 },
    { id: 8, title: 'The Lord of the Rings: The Two Towers', cardImg: Picks6 },
    { id: 9, title: 'Inception', cardImg: Picks5 },
    { id: 10, title: 'The Lord of the Rings: The Two Towers', cardImg: Picks6 },
    { id: 11, title: 'Inception', cardImg: Picks5 },
    { id: 12, title: 'The Lord of the Rings: The Two Towers', cardImg: Picks4 }
  ]);

  const scrollRef = useRef(null);

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

  return (
    <div className='topPicks'>
      <h1>What to Watch</h1>
      <TopSection 
        title="Top Picks"
        subtitle="TV shows and movies just for you"
        linkIcon={LinkArrow}
        onPrevClick={prevBtn}
        onNextClick={nextBtn}
        prevIcon={arrow}
        nextIcon={arrow}
      />
      <PicksCard picksCard={picksCard} scrollRef={scrollRef} />
    </div>
  );
}

export default TopPicks;