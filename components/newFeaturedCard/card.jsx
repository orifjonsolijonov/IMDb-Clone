import React from 'react';
import './card.css'
import cardImg1 from '/assets/cardImg1.png';
import cardImg2 from '/assets/cardImg2.png';
import cardImg3 from '/assets/cardImg3.png';
import cardImg4 from '/assets/cardImg4.png';
import button from '/assets/button.svg';

function Card({ frame, currentSlide }) {
    frame = [
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
            id: 2
        }
    ];

    return (
        <div className='CardFeature'>
            {frame.map((picture, index) => (
                <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
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
