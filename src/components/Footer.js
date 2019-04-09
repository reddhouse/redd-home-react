import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export default () => {
  const [value, setValue] = useState("")

  return (
    <Container>

    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  width: 100%;
  margin: 20px 10vw;
  border-top: 1px solid grey;
`
