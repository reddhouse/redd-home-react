import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Credit to @gragland
// https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}

function KeyPress() {
  const happyPress = useKeyPress('h')
  const sadPress = useKeyPress('s')
  const robotPress = useKeyPress('r')
  const foxPress = useKeyPress('f')

  return (
    <Container>
      <div>Try pressing keys <B>h, s, r, f</B></div>
      <div>
        {happyPress && <Bigmoji>😊</Bigmoji>}
        {sadPress && <Bigmoji>😢</Bigmoji>}
        {robotPress && <Bigmoji>🤖</Bigmoji>}
        {foxPress && <Bigmoji>🦊</Bigmoji>}
      </div>
    </Container>
  )
}

export default KeyPress

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
  height: 6em;
`

const B = styled.b`
  color: blue;
`

const Bigmoji = styled.div`
  font-size: 5em;
`
