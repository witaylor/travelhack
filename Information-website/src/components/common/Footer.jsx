import React from 'react';

import '../../stylesheets/Footer.css';
import travelhackLogo from "../../images/travelhack_logo.png";

const Footer = props => {
    const darkModePromptText = props.darkModeOn ? `Don't like the dark side?` : `White too bright?`;
    const darkModeButtonText = props.darkModeOn ? 'turn off dark mode' : 'turn on dark mode';

    return (
        <div id={'footer-wrapper'} className={'footer-wrapper'}>
            <div className={'footer-content-column'}>
                <h2>{ darkModePromptText }</h2>
                <button onClick={ props.darkModeFunction } className={'dark-mode-button'}>
                    <h3>{ darkModeButtonText }</h3>
                </button>
            </div>

            <div className={'footer-content-column'}>
                <div style={{
                    width: '40%',
                    borderRadius: '10px',
                    padding: '0 1em',
                    marginBottom: '0.5em',
                    backgroundColor: 'rgba(255,255,255,1)'
                }}>
                    <img src={ travelhackLogo } alt="Travel hack logo" style={{
                        maxWidth: '100%'
                    }}/>
                </div>
                <p>
                    An Expedia Group hackathon for students, organised by students. <br />
                    Websites made by&nbsp;
                    <a href="https://github.com/alfiewn" target="_blank" rel="noopener noreferrer">Alfie</a> and <a href="https://github.com/witaylor" target="_blank" rel="noopener noreferrer">Will</a>. 
                </p>
            </div>
        </div>
    );
};

export default Footer;