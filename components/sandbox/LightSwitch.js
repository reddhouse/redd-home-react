import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { GlobalContext } from '../../lib/Store'

function LightSwitch() {
  const { light, toggleLight } = useContext(GlobalContext)
  // Before the useContext hook, consuming values from multiple stores was pretty ulgy.
  // Now, it's as easy as...
  // const anotherValue = useContext(AnotherContext)

  return (
    <Container>
      <LightBox light={light}>
        {light ? "Lights Off" : "Lights On"}
      </LightBox>
      <button onClick={toggleLight}>Toggle Light</button>
    </Container>
  )
}

export default LightSwitch

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
const LightBox = styled.div`
  width: 200px;
  height: 30px;

  ${props => !props.light && css`
    background-color: black;
    color: white;
  `}
`
