import React, {Component} from 'react';
import Card from "./Card";

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    let startDate = new Date(props.startDate || new Date());
    let endDate = new Date(props.endDate || new Date());

    this.state = {
      timerIsRunning: false,
      startEpochTime: startDate,
      endEpochTime: endDate,
      timeStrings: {
        start: `${this.formatTime(startDate.getHours())}:${this.formatTime(startDate.getMinutes())}`,
        end: `${this.formatTime(endDate.getHours())}:${this.formatTime(endDate.getMinutes())}`
      },
      percentageComplete: '0' // string as used in styling
    };

    this.timer = null;
  }

  formatTime = (number) => { return (number < 10) ? `0${number}` : `${number}`; };

  getPercentageComplete = () => {
    let secondsToNow = Math.round(new Date().getTime());
    let secondsSinceStart = secondsToNow - this.state.startEpochTime;
    let secondsDuration = this.state.endEpochTime - this.state.startEpochTime;

    let percentageComplete = (secondsSinceStart / secondsDuration) * 100;
    percentageComplete = (percentageComplete < 0) ? 0 : percentageComplete;
    percentageComplete = (percentageComplete > 100) ? 100 : percentageComplete;

    return `${Math.round(percentageComplete)}%`;
  };

  update = () => {
    let percentageComplete = this.getPercentageComplete();
    this.setState({ percentageComplete: percentageComplete });
  };

  startTimer = () => {
    if (this.timer !== null) { return; }

    this.update();

    let duration = this.state.endEpochTime.getTime() - this.state.startEpochTime.getTime();
    let updateFrequency = duration / 100;

    this.timer = setInterval(this.update, updateFrequency);
  };

  componentWillUnmount() { clearInterval(this.timer); }

  render() {
    if (!this.state.timerIsRunning) this.startTimer();

    return this.state.startEpochTime > new Date().getTime() ? null :
        <Card>
          <h2>{this.props.title || null}</h2>
          <p>{this.props.body || null}</p>

          <div style={{display: 'flex', alignItems: 'center'}}>
            <h3>{this.state.timeStrings.start}</h3>

            <div className={'progress-bar-wrapper'}>
              <div className={'progress-bar'} style={{width: this.state.percentageComplete || '100%'}}>
                <p className={'progress-text'}>{this.state.percentageComplete}</p>
              </div>
            </div>

            <h3>{this.state.timeStrings.end}</h3>
          </div>
        </Card>
  }
}

export default ProgressBar;
