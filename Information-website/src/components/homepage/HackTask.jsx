import React from 'react';
import Card from "../common/Card";

import { taskTitle, taskQuestions } from '../../constants';

const HackTask = () => {
    return (
        <Card className={'hack-task-card'}>
            <h1>{ taskTitle }</h1>
            <p>
                Your team's task is to develop a solution to a problem that could occur in a travel situation. When defining
                your problem, you need to think about the following:
            </p>

            <ol>{ taskQuestions.map((question, index) => <li key={index}>{ question }</li>) }</ol>

            <p>
                We want you to answer these before you start programming, but how you solve your problem is up to you! Feel
                free to use any language, platform, technology you want!
            </p>

            <div className={'flex-centered'}>
                <p style={{flex: '1 0 70%', padding: '0 1em 0 0'}}>
                    To help your team get up and running, we've setup a GitHub repo for you. Not only will it help you
                    with development, it's needed for the judges to be able to see your code.<br />
                </p>
                    <a
                        className={'link-button'}
                        href={"https://github.com/travelhack?tab=repositories"}
                        target={'_blank'}
                    ><span>Go to GitHub</span></a>
            </div>
        </Card>
    );
};

export default HackTask;
