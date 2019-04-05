import React, { useState } from 'react'
import styled, { css } from 'styled-components'

function Main() {
  const [value, setValue] = useState("")

  return (
    <Container>
      <div>Reddhouse!</div>
    </Container>
  )
}

export default Main

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
