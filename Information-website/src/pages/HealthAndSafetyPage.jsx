import React from 'react'
import fireEvacImage from '../images/fire-evac.png'

import Card from "../components/common/Card";

const HealthAndSafetyPage = () => {
    return (
        <div>
            <Card className={'card-always-light'}>
                <img src={fireEvacImage} alt='Fire evacuation route' style={{maxWidth: '100%'}}/>
            </Card>

            <h2>Incident Reporting</h2>
            <p>
                All accidents/incidents/near misses/unsafe acts or conditions during an event must be reported to the Events
                Coordinator, on-site Facilities Team or Security Officers. If the emergency services have been contacted
                directly, please notify Security so that access arrangements can be made.
            </p>
            <h2>First Aid</h2>
            <p>
                For any quick First Aid solutions, you will find a First Aid kit in all kitchen and breakout areas in both offices.
                First Aiders can be identified across the offices via first aid flags that are attached to their monitors. Please
                note that any supplies taken from the first aid boxes should be reported to a first aider or the Facilities team so
                they can log the incident and ensure that items are replaced.
            </p>

            <h2>Emergency Evacuation</h2>
            <p>
                If the alarms sound during an event, all attendees should be directed to the assembly point located in the following
                locations:
            </p>
                <ul>
                    <li>Angel Square: In front of the Royal Bank of Scotland</li>
                    <li>Angel Building: Myddelton Square via Chadwell Street</li>
                </ul>
            <p>
                Remain at the Fire Assembly Point until further instruction is provided from Fire Wardens or Security.
            </p>
        </div>
    )
};

export default HealthAndSafetyPage;
