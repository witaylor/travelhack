import React from 'react';
import Card from "../common/Card";
import CountdownTimer from "../common/CountdownTimer";

import {
  welcomeTitle,
  welcomeText,
  travelhackEventList
} from '../../constants';

const Introduction = () => {
  return (
    <div className={'introduction-container'}>
      <Card className={'introduction-card'}>
        <h1>{ welcomeTitle }</h1>
        <p>{ welcomeText }</p>
      </Card>

      <CountdownTimer eventList={ travelhackEventList } />
    </div>
  );
};

export default Introduction;