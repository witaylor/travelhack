import React from 'react';

import '../../stylesheets/CommonComponents.css';
import '../../App.css';

const Card = (props) => {
    return (
        <div
          className={`common-bg-card ${props.className || ''}`}
          style={props.style}
        >
            { props.children }
        </div>
    );
};

export default Card;
