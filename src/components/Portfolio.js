import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'
import SureVote from './portfolio/SureVote'
import StreborSpades from './portfolio/StreborSpades'
import EthWallet from './portfolio/EthWallet'

export default () => {
  const { setNav } = useContext(ReddContext)

  return (
    <Container>
      <EthWallet />
      <DividerRow><Divider /></DividerRow>

      <SureVote />
      <DividerRow><Divider /></DividerRow>

      <StreborSpades />
      <br />
      <div onClick={() => setNav("HOME")}>{"<< "}Go Back</div>
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
