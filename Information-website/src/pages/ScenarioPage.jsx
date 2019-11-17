import React from 'react';
import Page from "../components/common/Page";
import Card from "../components/common/Card";
import Scenario from '../components/scenario-page/Scenario';

import '../stylesheets/scenario-page.css';

const ScenarioPage = () => {
    let questions = [
        `What's the issue you are targeting?`,
        `How are you solving it?`,
            `What is your target user group?`,
            `What stage of the travel journey are they at?`,
            `What platform are you building for? Why?`,
        `Are you integrating with other software? Why?`
    ];

    return (
        <Page>
            <Card>
                <h1>Traveller Problems</h1>
                <p>
                    To help you get off to a flying start, we've provided some example scenarios you could use. For
                    each scenario, think about the key questions;
                </p>
                <ol>
                    { questions.map((q, i) => <li key={`scenario-${i}`}>{ q } </li>) }
                </ol>
                <p>
                    Some of the scenarios have been inspired by an Expedia Group brand. These scenarios have been
                    provided by the brand itself and will be easily recognisable by the logo in the border.
                </p>
            </Card>

            <Card className={'scenario-list-wrapper'}>
                {scenarios.map((scenario, index) =>
                    <Scenario
                        scenario={scenario}
                        key={`scenario-${index}`}
                        className={`${index === 0 ? 'first-scenario' : (index === scenarios.length-1 ? 'last-scenario' : '')}`}
                    />
                )}
            </Card>


        </Page>
    );
};

export default ScenarioPage;

const scenarios = [
    {
        title: 'The Problem of Signing In',
        body: 'Travel is expensive and customers invest a lot of time planning it. They want to feel like they’re ' +
            'getting not only value for their money, but that they made the right choices. Sometimes they want to ' +
            'feel like they got something extra for theirmoney too.  Customers are more comfortable giving access to ' +
            'data as long as the perceived value they get back is just that, valuable to them. They want to feel like ' +
            'we know a bit about them and their tastes, our recommendations are useful, where they get additional value ' +
            'for making the booking with us, be it peace of mind that they got a great deal, security that it’s a ' +
            'recognised brand and won’t scam them, that we offer the right payment methods for their circumstances, or ' +
            'discounts and loyalty points for future bookings.We can only personalise experience or offer these ' +
            'discounts/loyalty points etc. if they have an account and are signed in when they shop and book with us. ' +
            'So how can we drive more sign in and sign up across all our brands and platforms/form factors',
        brand: 'bex'
    },
    {
        title: 'Maximising Budget',
        body: 'When customers have a level of flexibility of when to travel (e.g. I can travel any weekend in ' +
            'October) they spend time and effort trying to find the best time to visit which typically revolves ' +
            'around maximising budget (something students would empathise with). One of the teams in product has been ' +
            'exploring how we help people quickly find the best dates to travel in order to get the best price. ' +
            'Although this sounds pretty straight forward it comes with some difficult challenges.',
        brand: 'hcom'
    },
    {
        title: 'The (shared) Internet of Things',
        body: 'Many vacation rental property owners have IoT and Smart devices enabled in their home. A good solution ' +
            'that would be useful in the vacation rental market would be a system that would securely allow a Vrbo ' +
            'property owner to allow a Vrbo property renter to access their smart devices (without directly having to ' +
            'provide account credentials) to amplify their Vrbo vacation experience. Designing some kind of system that ' +
            'would allow for an easy transfer of power, to allow renters to make use of these IoT devices in vacation ' +
            'rentals would be incredibly beneficial to both property owners and renters. ',
        brand: 'vrbo'
    },
    {
        title: 'Collaboration & Concensus',
        body: 'When travelling with a group of people one of the challenges is getting consensus on the property to ' +
            'stay in. This involves sharing of preferred options across the group, discussion on the pros and cons of ' +
            'each option and then a decision making process. This is a quote from user research “it would be useful to ' +
            'have a shared list of properties and allow the people I’m travelling with to leave comments and vote on ' +
            'the options”. This could be a super interesting challenge as it can involve incorporating principles/concepts ' +
            'from a range of tools they maybe familiar',
        brand: 'hcom'
    }
];