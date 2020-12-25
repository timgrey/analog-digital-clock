import React from 'react'
import AnalogClock from './AnalogClock';
import styled from 'styled-components';

const Digit = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const ClockDigit = (props) => {
  const nullClock = [225, -135]

  const topLeft = {
    0: [90, -180],
    1: nullClock,
    2: [90, -270],
    3: [90, -270],
    4: [180, -180],
    5: [90, -180],
    6: [90, -180],
    7: [90, -270],
    8: [90, -180],
    9: [90, -180],
  }

  const topRight = {
    0: [180, -90],
    1: [180, -180],
    2: [180, -90],
    3: [180, -90],
    4: [180, -180],
    5: [270, -90],
    6: [270, -90],
    7: [180, -90],
    8: [180, -90],
    9: [180, -90],
  }

  const middleLeft = {
    0: [0, -180],
    1: [225, -135],
    2: [90, -180],
    3: [90, -270],
    4: [0, -270],
    5: [0, -270],
    6: [0, -180],
    7: nullClock,
    8: [0, -270],
    9: [0, -270],
  }

  const middleRight = {
    0: [0, -180],
    1: [0, -180],
    2: [0, -90],
    3: [0, -90],
    4: [0, -180],
    5: [180, -90],
    6: [180, -90],
    7: [0, -180],
    8: [0, -90],
    9: [0, -180],
  }

  const bottomLeft = {
    0: [0, -270],
    1: nullClock,
    2: [0, -270],
    3: [90, -270],
    4: nullClock,
    5: [90, -270],
    6: [0, -270],
    7: nullClock,
    8: [0, -270],
    9: [90, -270],
  }

  const bottomRight = {
    0: [0, -90],
    1: [0, 0],
    2: [270, -90],
    3: [0, -90],
    4: [0, 0],
    5: [0, -90],
    6: [0, -90],
    7: [0, 0],
    8: [0, -90],
    9: [0, -90],
  }
  
  return (
    <Digit>
      <Row>
        <AnalogClock handPositions={topLeft[props.digit]}/>
        <AnalogClock handPositions={topRight[props.digit]}/>
      </Row>

      <Row>
        <AnalogClock handPositions={middleLeft[props.digit]}/>
        <AnalogClock handPositions={middleRight[props.digit]}/>
      </Row>

      <Row>
        <AnalogClock handPositions={bottomLeft[props.digit]}/>
        <AnalogClock handPositions={bottomRight[props.digit]}/>
      </Row>
    </Digit>
  )
}

export default ClockDigit