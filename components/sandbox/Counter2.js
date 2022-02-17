import { useState, useEffect } from 'react'
import styled from 'styled-components'

function Counter2() {
  // The initialState argument passed to useState is the state used during the
  // initial render. In subsequent renders, it is disregarded. If the initial state
  // is the result of an expensive computation, you may provide a function instead,
  // which will be executed only on the initial render.

  const [count, setCount] = useState(() =>
    Number(window.localStorage.getItem('count') || 0),
  )
  const increment = () => setCount(count + 1)

  useEffect(
    () => {
      window.localStorage.setItem('count', count)
    },
    [count]
  )

  return (
    <Container>
      <button onClick={increment}>{count}</button>
    </Container>
  )
}

export default Counter2

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
