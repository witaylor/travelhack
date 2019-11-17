import React, { Component } from 'react';

import logo from '../../images/EG-logo.png';
import { NavLink } from 'react-router-dom';
import '../../stylesheets/DesktopHeader.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: window.location.pathname,
            prevPage: null
        };
    };

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let navBar = document.getElementById('header-container');

            if (window.scrollY > 0) navBar.classList.add('header-container-scrolled');
            else navBar.classList.remove('header-container-scrolled');
        });
    }

    componentWillUnmount() { window.removeEventListener('scroll'); }

    onLinkClick(newPage) {
        this.setState({
            prevPage: this.state.page,
            page: newPage
        });
    };

    getClassNames = (page, path) => {
        const str1 = page === path ? "page-link page-link-selected" : "page-link";
        const str2 = this.state.prevPage === path ? "prev-heading" : "";
        return `${str1} ${str2}`;
    };

    render() {
        const page = this.state.page;

        return (
            <div id="header-container" className="header-container" >
                <div className={'header-content'}>
                    <div className="titles-container">
                        <NavLink
                            className={this.getClassNames(page, '/')}
                            onClick={() => this.onLinkClick('/')}
                            to={"/"}
                        > Home
                        </NavLink>

                        <NavLink
                            className={this.getClassNames(page, '/team')}
                            onClick={() => this.onLinkClick('/team')}
                            to={"/team"}
                        > Team
                        </NavLink>

                        <NavLink
                            className={this.getClassNames(page, '/api')}
                            onClick={() => this.onLinkClick('/api')}
                            to={"/api"}
                        > APIs
                        </NavLink>

                        <NavLink
                            className={this.getClassNames(page, '/scenarios')}
                            onClick={() => this.onLinkClick('/scenarios')}
                            to={"/scenarios"}
                        > Scenarios
                        </NavLink>
                    </div>

                    <a  href="https://lifeatexpedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="logo-link"
                    ><img src={logo} alt='Expedia Group logo' />
                    </a>
                </div>
            </div>
        )
    }
}
