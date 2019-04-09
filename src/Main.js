import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from './Store'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Sandbox from './components/Sandbox'


export default () => {
  const { nav, setNav } = useContext(ReddContext)

  function renderNavigated() {
    switch (nav) {
      case "HOME":
        return <Home />
      case "PORTFOLIO":
        return <Portfolio />
      case "SANDBOX":
        return <Sandbox />
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
  min-width: 20px;
`

const Center = styled.div`
  flex: 0 1 700px;
`
