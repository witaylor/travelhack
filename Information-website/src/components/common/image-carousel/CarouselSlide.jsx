import React from 'react';

 const CarouselSlide = (props) => {
  return (
    <div
      className="photo-slide-wrapper"
       style={{ transform: `translateX(${ props.translate }px)` }}
    >
      { props.images.map((image, index) =>
        <div key={index} className="photo-slide" style={{ backgroundImage: `url(${image})` }} />
      )}
    </div>
  );
};

export default CarouselSlide;
