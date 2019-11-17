import React, { Component } from 'react'

import Card from "../components/common/Card";
import Page from "../components/common/Page";
import SearchBar from "../components/common/SearchBar";

import { volunteersTitle, recruiterList, volunteerList, judgeList } from "../constants";
import VolunteerList from "../components/team-page/VolunteerList";

export default class TeamPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recruiters: recruiterList,
            volunteers: volunteerList,
            judges: judgeList
        }
    }

    filterLists = searchParam => {
        this.setState({
            recruiters: this.filterListBy(recruiterList, searchParam),
            volunteers: this.filterListBy(volunteerList, searchParam),
            judges: this.filterListBy(judgeList, searchParam)
        });
    };

    filterListBy = (list, parameter) => {
        if (parameter === "") { return list; }
        let param = parameter.toLowerCase();

        return list.filter(item => { return item.name.toLowerCase().includes(param) ||
            item.bio.toLowerCase().includes(param) ||
            item.languages.some(elem => { return elem.toLowerCase().includes(param) }) ||
            item.otherSkills.some(elem => { return elem.toLowerCase().includes(param) });
        });
    };

    render() {
        return (
            <Page>
                <Card>
                    <h1>{ volunteersTitle }</h1>
                    <p>
                        While we don't doubt any of your programming abilities, sometimes you just need
                        a helping hand. This is where our team of volunteers comes in. All of us will do our best to help you
                        out, but some of us are more familiar with certain technologies than others. This page will let you find
                        out more about us and see what we're good at.
                    </p>
                    <p>
                        To respect their privacy, we decided to not use the photos and information about the people who 
                        actually belong here. If you really want to know who particiapted/helped run, get in touch.
                    </p>
                </Card>
                <Card>
                    <h3>Pro tip: use the search bar below to search for a specific skill, language or framework!</h3>
                    <SearchBar placeholder={'Search for something!'} callback={this.filterLists} />
                </Card>

                <VolunteerList recruiters={this.state.recruiters} volunteers={this.state.volunteers} judges={this.state.judges} />
            </Page>
        );
    };
};
