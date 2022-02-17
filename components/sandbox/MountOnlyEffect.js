import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

function MountOnlyEffect() {
  // inputRef will be passed to the input's ref prop, which will store a reference
  // to the input's DOM node. The value returned by useRef will remain unchanged
  // between renders.
  const inputRef = useRef()
  const [value, setValue] = useState("")

  // Fun fact: When you call useState, the setter function it returns is only created
  // once! It’ll be the exact same function instance every time the component renders,
  // which is why it’s safe for an effect to depend on one. This fun fact is also true
  // for the dispatch function returned by useReducer.

  useEffect(
    () => {
      // Effects runs AFTER the first render, so the ref is set by now.
      inputRef.current.focus()
    },
    // The effect "depends on" inputRef, and since refs are stable between
    // renders, this effect only runs once on initial mount.
    [inputRef]
  )

  return (
    <Container>
      <input
        ref={inputRef}
        value={value}
        placeholder={"Look! I\'m in focus!"}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  )
}

export default MountOnlyEffect

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
