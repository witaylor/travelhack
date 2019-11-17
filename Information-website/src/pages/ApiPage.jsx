import React from 'react';

import ApiList from '../components/api-page/ApiList.jsx';
import { apiCategories, apiTitle } from "../constants.js";
import Page from "../components/common/Page";
import ExpandingSection from "../components/common/ExpandingSection";

import '../stylesheets/api-page.css'
import Card from "../components/common/Card";

const ApiPage = () => {
    return (
        <Page>
            <Card>
                <h1>{apiTitle}</h1>
                <p>
                    To help you get off the mark, we've compiled this handy list of public APIs. Feel free to
                    use one or more in your application!
                </p>
                <p>
                    Check out even more public APIs from the project&nbsp;
                    <a href='https://github.com/public-apis/public-apis' target={'_blank'}>here</a>.

                    <br />
                    Or, if you want to use a big data set, try out&nbsp;
                    <a href={'https://www.kaggle.com/datasets'} target={'_blank'}>Kaggle</a>.
                </p>
            </Card>

            {apiCategories.map((category, index) =>
                <ExpandingSection title={category} key={index}>
                    <ApiList category={category}/>
                </ExpandingSection>
            )}
        </Page>
    );
};

export default ApiPage;