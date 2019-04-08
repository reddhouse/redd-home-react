import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Home from './components/Home'

export default () => {
  const [value, setValue] = useState("")

  return (
    <Container>
      <Gutter />
        <Center>
            <Home />
        </Center>
      <Gutter />
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Gutter = styled.div`
  flex: 1 1 auto;
  min-width: 10px;
`

const Center = styled.div`
  flex: 0 1 1040px;
`
