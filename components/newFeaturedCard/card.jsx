import React from 'react';
import './card.css'

function Card({ frame, scrollRef }) {
    return (
        <div className='CardFeature' ref={scrollRef}>
            {frame.map((picture, index) => (
                <div key={index} className={index === scrollRef ? 'slide active' : 'slide'}>
                    <img src={picture.imgUrl} alt={picture.Name} />
                    <img className='listBtn' src={picture.listBtn} alt="" />
                    <p>{picture.Name}</p>
                    <p className='secondary'>{picture.linkName}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
