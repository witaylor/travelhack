import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import ApiPage from './pages/ApiPage';
import HealthAndSafetyPage from './pages/HealthAndSafetyPage';
import HomePage from './pages/HomePage';
import PageNotFound from "./pages/PageNotFound";
import TeamPage from './pages/TeamPage';
import ScenarioPage from './pages/ScenarioPage';
import Header from "./components/header/Header";
import Footer from "./components/common/Footer";
import PreEventPage from "./pages/PreEventPage";

class App extends Component {
    constructor(props) {
        super(props);

        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
        const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
        const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

        let defaultToDarkMode = isDarkMode;
        if (isLightMode) defaultToDarkMode = false;
        if (isNotSpecified || hasNoSupport) {
            let hour = new Date().getHours();
            defaultToDarkMode = hour < 6 || hour >= 18;
        }

        this.state = {
            darkMode: defaultToDarkMode
        };
    }

    trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    };

    updateAppearance = (isDarkModeOn, smoothTransition) => {
        if(isDarkModeOn) {
            if (smoothTransition) this.trans();
            document.documentElement.setAttribute('theme', 'dark')
        } else {
            if (smoothTransition) this.trans();
            document.documentElement.setAttribute('theme', 'light')
        }
    };

    toggleDarkMode = () => {
        this.setState({ darkMode: !this.state.darkMode });
        this.updateAppearance(this.state.darkMode, true);
    };

    render() {
        this.updateAppearance(this.state.darkMode, false);

        const hasStarted =  new Date('November 15, 2019 12:00:00') <= new Date();
        const AppComponent = !hasStarted ? <PreEventPage /> :
            <Router>
                <div className={'App'}>
                    <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"></link>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/api" component={ApiPage} />
                        <Route exact path="/team" component={TeamPage} />
                        <Route exact path="/scenarios" component={ScenarioPage} />
                        <Route exact path="/safety" component={HealthAndSafetyPage} />

                        {/* 404 Page */}
                        <Route path="/404" component={PageNotFound} />
                        <Redirect to='/404' />
                    </Switch>

                    <Footer
                        darkModeOn={ this.state.darkMode }
                        darkModeFunction={ this.toggleDarkMode }
                    />
                </div>
            </Router>;

        return AppComponent;
    }
}

export default App;