import React, {useState, useRef} from 'react'
import TopSection from './TopSection'
import arrow from '/assets/icons/arrow.svg';
import cardImg4 from '/assets/cardImg4.png';
import play from '/assets/watchPlay.svg';
import './CreateSection.css'

function CreateSection() {
   const [creat, setCreat] = useState([
       {
        cardImg: cardImg4,
        cardTitle: "IMDb Staff's Favorite FIlms Directed by Women",
        cardWatch: 'Watch now',
        cardBtn:play,
        id: 1
       },
       {
        cardImg: cardImg4,
        cardTitle: "Oscars 2024: Photos We Love",
        cardWatch: 'Watch now',
        cardBtn:play,
        id: 2
       },
       {
        cardImg: cardImg4,
        cardTitle: "2024 Oscars Red Carpet Photos",
        cardWatch: 'Watch now',
        cardBtn:play,
        id: 3
       },
       {
        cardImg: cardImg4,
        cardTitle: "Staff Picks: What to Watch in March",
        cardWatch: 'Watch now',
        cardBtn:play,
        id: 4
       }
   ])
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
    <div className='CreateSection'>
         <h1>Videos</h1>
      <TopSection
          title="IMDb Originals"
          subtitle="Celebrity interviews, trending entertainment stories, and expert analysis"
          onPrevClick={prevBtn}
          onNextClick={nextBtn}
          prevIcon={arrow}
          nextIcon={arrow}
      />
      <div className="creatCard" ref={scrollRef}>
      {creat.map((picture, index) => (
        <div id='card' key={index} className='slide'>
          <img src={picture.cardImg} alt={picture.cardTitletitle} />
          <p>{picture.cardTitle}</p>
          <p className='secondary'>{picture.cardWatch}</p>
            <img className='cardBtn' src={play} alt="play icon" />

        </div>
      ))} 
        </div>
      </div>
  )
}

export default CreateSection