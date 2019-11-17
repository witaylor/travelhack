import React, {Component} from 'react';

import { NavLink } from "react-router-dom";
import logo from "../../images/EG-logo.png";

import '../../stylesheets/MobileHeader.css';

export default class MobileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }
    }

    onMenuClicked = () => {
        this.setState({isExpanded: !this.state.isExpanded})
    };

    onLinkClick(newPage, shouldBeExpanded) {
        this.setState({
            prevPage: this.state.page,
            page: newPage,
        });

        if (shouldBeExpanded !== undefined) {
            this.setState({ isExpanded: shouldBeExpanded });
        } else {
            this.setState({ isExpanded: !this.state.isExpanded });
        }
    };

    getClassNames = () => `mobile-nav-container-${this.state.isExpanded ? "expanded" : "hidden"}`;

    render() {
        return (
            <div className={'header-container mobile-header-container'}>
                <div className={'mobile-header-navigation'}>
                    <a  href="https://lifeatexpedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="logo-link logo-link-mobile"
                    ><img src={logo} alt='Expedia Group logo' />
                    </a>

                    <div className={'hamburger-menu'} onClick={this.onMenuClicked}>
                        <div className={'hamburger-line'} />
                        <div className={'hamburger-line'} />
                        <div className={'hamburger-line'} />
                    </div>
                </div>

                <div className={this.getClassNames()}>
                    <NavLink
                        className={'mobile-nav-button heading-text'}
                        onClick={() => this.onLinkClick('/')}
                        to={"/"}
                    > Home
                    </NavLink>

                    <NavLink
                        className={'mobile-nav-button heading-text'}
                        onClick={() => this.onLinkClick('/api')}
                        to={"/api"}
                    > APIs
                    </NavLink>

                    <NavLink
                        className={'mobile-nav-button heading-text'}
                        onClick={() => this.onLinkClick('/team')}
                        to={"/team"}
                    > Team
                    </NavLink>

                    <NavLink
                        className={'mobile-nav-button heading-text'}
                        onClick={() => this.onLinkClick('/safety')}
                        to={"/safety"}
                    > Health & Safety
                    </NavLink>
                </div>
            </div>
        );
    }
}
