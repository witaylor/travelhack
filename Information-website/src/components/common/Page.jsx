import React from 'react';
import '../../stylesheets/CommonComponents.css';

const Page = (props) => {
    return (
        <div className={'common-page'} style={props.style}>
            { props.children }
        </div>
    );
};

export default Page;
