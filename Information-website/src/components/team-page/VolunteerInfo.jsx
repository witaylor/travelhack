import React from 'react'

const VolunteerInfo = props => {
    let convertToString = (prefix, array) => {
        if (array.length <=  0) { return ''}
        if (array.length === 1) { return `${array[0]}.` }
        if (array.length === 2) { return `${array[0]} and ${array[1]}.` }
        else {
            const last = array[array.length-1];
            const first = array.slice(0,array.length-1).join(', ');

            return `${prefix} ${first} and ${last}.`;
        }
    };

    return (
        <div className='volunteer-info-container'>
            <h2 className='heading-text'>{props.name}</h2>

            <p>{props.bio}</p>
            <p>{`${convertToString('I can help with ', props.languages)}`}</p>
            <p>{`${convertToString(`I'm also pretty good at `, props.otherSkills)}`}</p>
        </div>
    );
}

export default VolunteerInfo;
