import React, { useState } from 'react'
import styled from 'styled-components'

function Counter() {
  const [count, setCount] = useState(0)

  // Example of "functional update” form of setCount. Wouldn't make a difference
  // in this example, but useful in case your update is happening in a closure which
  // has closed over the old (stale) value of the state. Using the updater form ensures
  // you are operating on the latest value of state.

  // setCount(previousCount => previousCount + 1)

  return (
    <Container>
      <div>You clicked {count} times</div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Container>
  )
}

export default Counter

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
