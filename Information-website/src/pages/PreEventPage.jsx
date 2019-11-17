import React from 'react';
import Card from "../components/common/Card";
import CountdownTimer from "../components/common/CountdownTimer";

const PreEventPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#333'
        }}>
            <div style={{maxWidth: '50%'}}>
                <Card style={{boxShadow: 'none'}}>
                    <h1>Whoops! You can't view this yet.</h1>
                    <p>You'll be able to see what's hiding here when TravelHack starts.</p>
                </Card>

                <CountdownTimer eventList={[{
                    name: "TravelHack Starts",
                    time: "November 15, 2019 12:00:00"
                }]} customCardStyle={{boxShadow: 'none'}}/>
            </div>
        </div>
    );
};

export default PreEventPage;