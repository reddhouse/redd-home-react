import { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../lib/Store'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Sandbox from '../components/Sandbox'

const IndexPage = () => {
  const { nav, setNav } = useContext(GlobalContext)

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
        {renderNavigated()}
      </Center>
      <Gutter />
    </Container>
  )

}

export default IndexPage

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
