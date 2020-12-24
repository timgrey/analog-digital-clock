import React, { Component } from 'react'
import styled from 'styled-components'

const Clock = styled.div`
    height: 50px;
    width: 50px;
    color: black;
    background: color;
    border-radius: 100%;
    border: 2px solid lightgrey;
    position: relative;
`

const Hand = styled.div`
  height: 50px;
  width: 5px;
  position: absolute;

  &.clockwise {
    background: blue;
    top: 0;
    left: 25%;
  }

  &.counter-clockwise {
    background: red;
    top: 0;
    right: 25%;
  }
`


export default class AnalogClock extends Component {
  render(props) {
    return (
      <Clock>
        <Hand className="clockwise" />
        <Hand className="counter-clockwise" />
      </Clock>
    )
  }
}
