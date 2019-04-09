import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import Home from './components/Home'
import { ReddContext } from './Store'

export default () => {
  const { nav, setNav } = useContext(ReddContext)

  function renderNavigated() {
    switch (nav) {
      case "HOME":
        return <Home />
      case "PORTFOLIO":
        return <div>Portfolio Stub</div>
      case "SANDBOX":
        return <div>Sandbox Stub</div>
      default:
        return
    }
  }

  return (
    <Container>
      <Gutter />
        <Center>
          { renderNavigated() }
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
