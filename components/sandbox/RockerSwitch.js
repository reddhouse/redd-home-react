import { useState } from 'react'
import styled, { css } from 'styled-components'

function RockerSwitch() {
  const [checked, setChecked] = useState(false)

  return (
    <Container>
      <Rocker onClick={() => setChecked(!checked)}>
        <SwitchLeft checked={checked}>Yes</SwitchLeft>
        <SwitchRight checked={checked}>No</SwitchRight>
      </Rocker>
    </Container>
  )
}

export default RockerSwitch

/***************************** Styled Components *****************************/

// Inspired by @MarcusConnor
// https://codepen.io/marcusconnor/pen/QJNvMa

const Container = styled.div`
  box-sizing: border-box;
  font-family: 'Arial' sans-serif;
  font-size: 100%;
  margin: 10px;
  padding:0;
`
const Rocker = styled.div`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  font-size: 2em;
  ${'' /* Change to small rocker */}
  ${'' /* font-size: 0.75em; */}
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  height: 4em;
  width: 7em;
  border-bottom: 0.5em solid #eee;

  &::before {
    content: "";
    position: absolute;
    top: 0.5em;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #999;
    border: 0.5em solid #eee;
    border-bottom: 0;
  }
`
const Switch = styled.span`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &::before {
    content: "";
    position: absolute;
  }
`
const SwitchLeft = styled(Switch)`
  height: 2.4em;
  width: 2.75em;
  left: 0.85em;
  bottom: 0.4em;
  background-color: #ddd;
  color: #888;
  transform: rotate(15deg) skewX(15deg);

  &::before {
    height: 2.45em;
    width: 0.4em;
    left: -0.4em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);
    ${props => props.checked && css`
      background-color: transparent;
    `}
  }

  ${props => props.checked && css`
    height: 2.5em;
    width: 3em;
    bottom: 0px;
    left: 0.5em;
    background-color: #478547;
    color: #fff;
    transform: rotate(0deg) skewX(0deg);
  `}
`
const SwitchRight = styled(Switch)`
  height: 2.5em;
  width: 3em;
  bottom: 0;
  right: 0.5em;
  background-color: #bd5757;
  color: #fff;
  transform: rotate(0deg) skewX(0deg);

  &::before {
    height: 2.45em;
    width: 0.4em;
    bottom: -0.45em;
    right: -0.375em;
    background-color: transparent;
    transform: skewY(65deg);
    ${props => props.checked && css`
      background-color: #ccc;
    `}
  }
  ${props => props.checked && css`
    height: 2.4em;
    width: 2.75em;
    right: 0.8em;
    bottom: 0.4em;
    background-color: #ddd;
    color: #888;
    transform: rotate(-15deg) skewX(-15deg);
  `}
`
