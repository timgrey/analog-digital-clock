import './App.css';
import React from 'react';
import Moment from 'moment';
import ClockDigit from './Components/ClockDigit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: '00',
      minute: '00',
      second: '00',
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
      hour: Moment().format('hh'),
      minute: Moment().format('mm'),
      second: Moment().format('ss'),
    });
  }

  render() {
    return (
      <div className="app">
        <div className="clock">
          <ClockDigit digit={this.state.hour[0]} />
          <ClockDigit digit={this.state.hour[1]} />
          <div className="colon">:</div>
          <ClockDigit digit={this.state.minute[0]} />
          <ClockDigit digit={this.state.minute[1]} />
          <div className="colon">:</div>
          <ClockDigit digit={this.state.second[0]} />
          <ClockDigit digit={this.state.second[1]} />
        </div>
      </div>
    );
  }
}

export default App;
