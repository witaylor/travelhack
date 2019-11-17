import React, {Component} from 'react';
import Card from "./Card";

import '../../stylesheets/CommonComponents.css';

class ExpandingSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };

        this.toggleExpansion = this.toggleExpansion.bind(this);
    }

    toggleExpansion = () => { this.setState({ expanded: !this.state.expanded }); };

    render() {
        const childComponent = <div className={'expanding-content'}>{ this.props.children }</div>;

        return (
            <Card className={'expanding-section-container'}>
                <div
                    onClick={() => this.toggleExpansion()}
                    className={`expanding-section ${this.state.expanded ? 'expanding-section-expanded' : ''}`}
                >
                    <h2>{ this.props.title }</h2>
                    <p>{ this.state.expanded ? 'Hide' : 'Show' }</p>
                </div>

                { this.state.expanded ? (childComponent) : null }
            </Card>
        );
    }
}

export default ExpandingSection;