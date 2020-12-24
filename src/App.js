import './App.css';
import React from 'react';
import Moment from 'moment';
import AnalogClock from './Components/AnalogClock'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      hours: Moment().format('hh'),
      minutes: Moment().format('mm'),
      seconds: Moment().format('ss'),
    });
  }

  currentTime() {
    return `${this.state.hours}:${this.state.minutes}:${this.state.seconds}`
  }

  render() {
    return (
      <div className="App">
        <p className="App-clock">
          The time is {this.currentTime()}.
        </p>
        <AnalogClock />
      </div>
    );
  }
}

export default App;
