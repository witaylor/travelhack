import React from 'react'
import VolunteerListBlock from "./VolunteerListBlock";
import Card from "../common/Card";

const VolunteerList = props => {
    let { recruiters, volunteers, judges} = props;

    let allListsEmpty = recruiters.length === 0 && volunteers.length === 0 && judges.length === 0;

    return (
        allListsEmpty ?
        <Card>
            <h1>No results found.</h1>
        </Card>
        :
        <div>
          <VolunteerListBlock heading='The Recruiters' list={ recruiters }/>
          <VolunteerListBlock heading='The Volunteers' list={ volunteers }/>
          <VolunteerListBlock heading='The Judges' list={ judges } />
        </div>
    )
};

export default  VolunteerList;
