import React from 'react'
import styled from 'styled-components'

const Clock = styled.div`
    height: calc(100vw / 20);
    width: calc(100vw / 20);
    background: whitesmoke;
    border-radius: 100%;
    border: 5px solid white;
    box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    margin: 2px;
`

const Hand = styled.div`
  height: 50%;
  width: 8%;
  top: 0;
  left: calc(46%);
  position: absolute;
  transform-origin: bottom center;
  margin: auto;
  background: darkgrey;
  transition: all 900ms ease !important;
  border-radius: 8px;
`

const Dot = styled.div`
  width: 12%;
  height: 12%;
  background: white;
  border-radius: 100%;
  margin: auto;
  position: absolute;
  top: 44%;
  left: 44%;
  z-index: 2;
  box-shadow: 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
`

const AnalogClock = (props) => {
  const handStyles = (i) => {
    return {
      transform: `rotate(${props.handPositions[i]}deg)`,
      background: `${props.handPositions[0] === 225 ? 'white' : 'black'}`
    }
  }
  return (
    <Clock>
      <Dot />
      <Hand className="hand-1" style={handStyles(0)}/>
      <Hand className="hand-2" style={handStyles(1)}/>
    </Clock>
  )
}

export default AnalogClock