import React, { useState } from 'react';
import './newFeaturedCard.css';
import arrow from '/assets/icons/arrow.svg';
import Card from './card';

function NewFeaturedCard() {
    const [frame, setFrame] = useState([]);

    return (
        <div className='Featured'>
            <div className="topFeatured">
                <h2><span></span>Featured Today</h2>
                <div className="btn">
                    <img id='arrow1' src={arrow} alt="arrow" />
                    <img id='arrow2' src={arrow} alt="arrow" />
                </div>
            </div>
            <Card frame={frame} currentSlide={0} />
        </div>
    );
}

export default NewFeaturedCard;
