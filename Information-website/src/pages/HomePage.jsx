import React from 'react';

import HackTask from "../components/homepage/HackTask";
import Icebreakers from "../components/homepage/Icebreakers";
import Introduction from "../components/homepage/Introduction";
import Page from "../components/common/Page";
import ProgressBar from "../components/common/ProgressBar";

import '../stylesheets/homepage.css';
import ExpandingSection from "../components/common/ExpandingSection";
import HealthAndSafetyPage from "./HealthAndSafetyPage";

const HomePage = () => {
    return (
        <Page>
            <ProgressBar
                title={`It's coding time...`}
                startDate={'November 15, 2019 14:00:00'}
                endDate={'November 16, 2019 11:00:00'}
            />

            <Introduction />
            <HackTask />

            <Icebreakers />

            <ExpandingSection title={'Health & Safety'}>
                <HealthAndSafetyPage />
            </ExpandingSection>
        </Page>
    );
};

export default HomePage;