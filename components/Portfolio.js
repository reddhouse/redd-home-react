import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import SureVote from './portfolio/SureVote'
import StreborSpades from './portfolio/StreborSpades'
import EthWallet from './portfolio/EthWallet'
import LiquidCenter from './portfolio/LiquidCenter'
import Liquify from './portfolio/Liquify'

export default () => {
  return (
    <Container>
      <Header location="PORTFOLIO" />

      <Liquify />
      <DividerRow><Divider /></DividerRow>

      <LiquidCenter />
      <DividerRow><Divider /></DividerRow>

      <EthWallet />
      <DividerRow><Divider /></DividerRow>

      <SureVote />
      <DividerRow><Divider /></DividerRow>

      <StreborSpades />

      <Footer location="PORTFOLIO" />
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`

`
const DividerRow = styled.div`
  display: flex;
  justify-content: center;
`
const Divider = styled.div`
  flex: 0 1 66%;
  margin: 40px 0px 20px 0px;
  border-top: 1px solid lightgrey;
`
