import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export default () => {
  const [value, setValue] = useState("")

  return (
    <Container>
      <StyledImage src={"red-house.png"} />
      <Tagline>justin builds stuff with&nbsp;javascript</Tagline>
      <SubTag>React, React Native, and Web3 Developer</SubTag>
      <Button>portfolio</Button>
      <Button>sandbox</Button>
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  text-align: center;
`

const StyledImage = styled.img`
  width: 300px;
  margin-top: 40px;
  ${props => props.theme.media.phone`
    width: 175px;
    margin-top: 10px;
  `}
`

const Tagline = styled.div`
  margin: 0px 10px;
  font-size: 2.5em;
  ${props => props.theme.media.tablet`font-size: 2em;`}
  ${props => props.theme.media.phone`font-size: 1.75em;`}
`

const SubTag = styled.div`
  margin: 20px 10px;
  font-size: 1.25em;
  ${props => props.theme.media.tablet`font-size: 1em;`}
  ${props => props.theme.media.phone`font-size: 1em;`}
`

const Button = styled.button`
  margin: 30px 10px 0px 10px;
  width: 175px;
  color: ${props => props.theme.color1};
  letter-spacing: 1px;
  background-color: white;
  border: 2px solid ${props => props.theme.color1};
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
`
