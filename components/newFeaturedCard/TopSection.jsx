import React from 'react';

function TopSection({ title, subtitle, linkIcon, onPrevClick, onNextClick, prevIcon, nextIcon }) {
  return (
    <div className="top">
      <div className="textBtn">
        <h2><span></span>{title} {linkIcon && <img src={linkIcon} alt="linkArrow" />} </h2>
        <p>{subtitle}</p>
      </div>
      <div className="btn">
        <img onClick={onPrevClick} id='arrow1' src={prevIcon} alt="arrow" />
        <img onClick={onNextClick} id='arrow2' src={nextIcon} alt="arrow" />
      </div>
    </div>
  );
}

export default TopSection;
