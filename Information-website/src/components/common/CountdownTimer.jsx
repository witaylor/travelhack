import React, { Component } from 'react';
import Card from "./Card";
import TimeText from "./TimeText";
import '../../stylesheets/CommonComponents.css';

export default class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    let firstEvent = props.eventList.filter(event => new Date(event.time) > new Date())[0];

    if (firstEvent === undefined) {
      firstEvent = props.eventList[props.eventList.length - 1]
    }

    this.state = {
      time: {},
      seconds: this.findSecondsToDate(new Date(firstEvent.time)),
      event: firstEvent,
      isTimerRunning: false
    };
    this.timer = 0;

    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  loadNextEvent() {
    let nextEvent = this.props.eventList.filter(event => new Date(event.time) > new Date())[0];

    if (nextEvent === undefined || nextEvent === null) {
      clearInterval(this.timer);
      return;
    }

    this.setState({
      time: {},
      seconds: this.findSecondsToDate(new Date(nextEvent.time)),
      event: nextEvent
    });
  };

  findSecondsToDate = (targetDate) => {
    let currentSecondsSinceEpoch = Math.round((new Date()).getTime() / 1000);
    let dateSecondsSinceEpoch = Math.round(targetDate.getTime() / 1000);

    let secondsDifference = dateSecondsSinceEpoch - currentSecondsSinceEpoch;

    // If dif < 0 then the date is in the past
    if (secondsDifference < 0) { return 0 }
    return secondsDifference;
  };

  secondsToTime(secs){
    let days = Math.floor(secs / 86400);

    let divisorForHours = secs % 86400;
    let hours = Math.floor(divisorForHours / (3600));

    let divisorForMinutes = secs % (3600);
    let minutes = Math.floor(divisorForMinutes / 60);

    let divisorForSeconds = divisorForMinutes % 60;
    let seconds = Math.ceil(divisorForSeconds);

    return {
      "d": days,
      "h": hours,
      "m": minutes,
      "s": seconds
    };
  };

  getDisplayTime = () => {
    let { time } = this.state;

    time.d = time.d === undefined ? '0' : time.d;
    time.h = time.h === undefined ? '0' : time.h;
    time.m = time.m === undefined ? '0' : time.m;
    time.s = time.s === undefined ? '0' : time.s;

    if (time.d <= 3) {
      return {
        time: [time.h, time.m, time.s],
        units: ['hours', 'mins', 'secs']
      };
    }
    return {
      time: [time.d, time.h, time.m],
      units: ['days','hours', 'mins']
    };
  };

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  };

  componentWillUnmount() { clearInterval(this.timer); }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({ isTimerRunning: true });
    }
  };

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      this.loadNextEvent();
    }
  }

  render() {
    if (!this.state.isTimerRunning) { this.startTimer() }
    let displayTime = this.getDisplayTime();

    return (
      <Card className={'countdown-wrapper centered'} style={this.props.customCardStyle}>
          <div className={'countdown-text-container'}>
            <TimeText time={displayTime.time[0]} unit={displayTime.units[0]} />
            <TimeText time={':'} />
            <TimeText time={displayTime.time[1]} unit={displayTime.units[1]} />
            <TimeText time={':'} />
            <TimeText time={displayTime.time[2]} unit={displayTime.units[2]} />
          </div>

          <h3 className={'countdown-name'}>Until { this.state.event.name }</h3>
      </Card>
    )
  }
}

