import React from 'react'

const VolunteerPhoto = props => {
    return (
        <div className='volunteer-image-container'>
            <img src={props.url} alt="The volunteer" />
        </div>
    );
};

export default VolunteerPhoto;
