import React, {Component} from 'react';
// import '../../old_stylesheets/ApiPage.css'
import '../../stylesheets/api-page.css';

export default class ApiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [],
            names: [],
            descriptions: [],
            isLoading: true,
            error: null,
            category: props.category
        }
    }

    componentDidMount(){
        fetch("https://api.publicapis.org/entries?category="+this.state.category+"&https=true")
            .then(res => res.json())
            .then(result => {
                    const links = result.entries.map(entry => { return entry.Link });
                    const names = result.entries.map(entry => { return entry.API });
                    const descriptions = result.entries.map(entry => { return entry.Description });
                    this.setState({
                        links: links,
                        names: names,
                        descriptions: descriptions,
                        isLoading: false
                    })
                }, (error) => {
                    this.setState({ error })
                }
            )
    }

    render() {
        const {links, names, descriptions, isLoading, error} = this.state;

        if (error) {
            return <div className={'api-error-div'}>Error: {error.message}</div>
        }else if(isLoading) {
            return <h2 className={'api-loading-heading'}>List loading...</h2>
        } else { return (
            <div className="api-list-wrapper">
                <ul>
                    {links.map((link,index) =>
                        <li key={`${this.state.category}-${index}`}>
                            <a className='api-link' href={link} target='blank' rel="noopener noreferrer">
                                <h3 className='api-name'>{names[index]}</h3>
                                {descriptions[index]}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        )}
    }
}
