import React from 'react'
import './newFeaturedCard.css'
import arrow from '/assets/icons/arrow.svg'

function newFeaturedCard() {
  return (
    <div>
         <div className='Featured'>
      <div className="topFeatured">
        <h2><span></span>Featured Today</h2>
        <div className="btn">
            <img id='arrow1' src={arrow} alt="arrow" />
            <img id='arrow2' src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default newFeaturedCard