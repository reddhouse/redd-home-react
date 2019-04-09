import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'

export default () => {
  const { setNav } = useContext(ReddContext)

  return (
    <Container>
      <div>Sandbox goes here</div>
      <div onClick={() => setNav("HOME")}>{"<< "}Go Back</div>
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`

`
