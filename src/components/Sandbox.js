import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'
import Header from './Header'
import Footer from './Footer'

export default () => {
  const { setNav } = useContext(ReddContext)

  return (
    <Container>
      <Header location="SANDBOX" />

      <div>Sandbox</div>
      <DividerRow><Divider /></DividerRow>

      <Footer location="SANDBOX" />
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
