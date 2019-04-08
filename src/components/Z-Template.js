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
  margin: 20px;

  ${props => props.theme.media.tablet`margin: 10px;`}
  ${props => props.theme.media.phone`margin: 10px;`}

  color: ${props => props.theme.color1};

  ${props => props.foo && css`
    margin: 30px;
  `}
`
