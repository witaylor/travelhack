import React from 'react';

import Card from "../components/common/Card";
import Page from "../components/common/Page";

import pnfGif from '../images/pageNotFound.gif'
import '../stylesheets/404-page.css';

const PageNotFound = () => {
    return (
        <Page>
            <Card className={'pnf-content-wrapper'}>
                <div className={'pnf-gif-wrapper'}>
                    <img src={pnfGif} alt={'A mock star wars gif stating "This is not the page you\'re looking for'}/>
                    <p className={'pnf-gif-attribution'}>
                        <a href="https://giphy.com/gifs/southparkgifs-l0HlCV8U15grrbVaU">via GIPHY</a>
                    </p>
                </div>

                <div className={'pnf-error-wrapper pnf-error-headings-wrapper'}>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </div>
            </Card>
        </Page>
    );
};

export default PageNotFound;