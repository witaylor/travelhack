import React from 'react';

import VolunteerPhoto from "./VolunteerPhoto";
import VolunteerInfo from "./VolunteerInfo";
import Card from "../common/Card";

import '../../stylesheets/team-page.css';

const VolunteerListBlock = props => {
    return (props.list === undefined || props.list.length === 0 ? null :
        <Card className={'list-block-container'}>
            <h1>{ props.heading }</h1>

            <ul className='volunteer-list'>
                {props.list.map( (person, index) =>
                    <li key={`${props.heading}-${index}`}>
                        <Card className={'volunteer-card-flex'}>
                            <VolunteerPhoto url={person.imageUrl}/>
                            <VolunteerInfo
                                name={person.name}
                                bio={person.bio}
                                languages={person.languages}
                                otherSkills={person.otherSkills}
                            />
                        </Card>
                    </li>
                )}
            </ul>
        </Card>
    );
};

export default VolunteerListBlock;
