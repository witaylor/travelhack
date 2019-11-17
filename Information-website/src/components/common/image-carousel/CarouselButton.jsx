import React from 'react';

export default function CarouselButton(props) {
  let { direction } = props;
  let divClassNames = `arrow ${direction === 'left' ? 'back' : 'next'}Arrow`;

  return (
    <div className={divClassNames} onClick={props.handler}>
      <h1 style={{color:'black'}}>
        { direction === 'left' ? <p>{ '👈' }</p> : <p>{ '👉' }</p> }
      </h1>
    </div>
  );
};
