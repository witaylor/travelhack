import React from 'react';

const TimeText = (props) => {
  let format = (number) => { return (number < 10) ? `0${number}` : `${number}`; };
  let heading = (props.time === ':') ? ' : ' : format(props.time);

  return (
    <div>
      <h3>{heading}</h3>
      <h4>{props.unit || ' '}</h4>
    </div>
  );
};

export default TimeText;
