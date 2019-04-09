import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'
import SureVote from './portfolio/SureVote'

export default () => {
  const { setNav } = useContext(ReddContext)

  return (
    <Container>
      <SureVote />
      <br />
      <div onClick={() => setNav("HOME")}>{"<< "}Go Back</div>
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`

`
