import React from 'react';
import Card from "../common/Card";

import { icebreakers } from '../../constants';

const Icebreakers = () => {
  return (
    <Card>
      <h1>Some Icebreakers</h1>

      {icebreakers.map( (icebreaker, index) =>
          <div key={index} className={'icebreaker-container'}>
            <h3>{ icebreaker.title }</h3>
            <p>{ icebreaker.body }</p>
            { (index === icebreakers.length-1) ? null : <hr /> }
          </div>
        )}
    </Card>
  );
};

export default Icebreakers;