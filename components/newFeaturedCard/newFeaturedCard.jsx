import React, { useState, useRef } from 'react';
import './newFeaturedCard.css';
import arrow from '/assets/icons/arrow.svg';
import Card from './card';
import cardImg1 from '/assets/cardImg1.png';
import cardImg2 from '/assets/cardImg2.png';
import cardImg3 from '/assets/cardImg3.png';
import cardImg4 from '/assets/cardImg4.png';
import button from '/assets/button.svg';

function NewFeaturedCard() {
    const [frame, setFrame] = useState([
        {
            imgUrl: cardImg1,
            Name: 'Staff Picks: What to Watch in March',
            linkName: 'See our picks',
            listBtn:button,
            id: 1
        },
        {
            imgUrl: cardImg2,
            Name: '21st Century Scream Queens',
            linkName: 'See the gallery',
            listBtn:button,
            id: 2
        },
        {
            imgUrl: cardImg3,
            Name: 'Everything New on Max in March',
            linkName: 'See the list',
            listBtn:button,
            id: 3
        },
        {
            imgUrl: cardImg4,
            Name: 'Staff Picks: What to Watch in March',
            linkName: 'See the photos',
            listBtn:button,
            id: 4
        }
    ]);
    const scrollRef = useRef(null);

  

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
        <div className='Featured'>
            <div className="topFeatured">
                <h2><span></span>Featured Today</h2>
                <div className="btn">
                    <img onClick={prevBtn} id='arrow1' src={arrow} alt="arrow" />
                    <img onClick={nextBtn} id='arrow2' src={arrow} alt="arrow" />
                </div>
            </div>
            <Card frame={frame} scrollRef={scrollRef} />
        </div>
    );
}

export default NewFeaturedCard;
