import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'

export default () => {
  const { setNav } = useContext(ReddContext)

  function handleClick() {
    window.open("https://github.com/reddhouse");
  }

  return (
    <Container>
      <StyledImage src={"red-house.png"} />
      <Tagline>justin builds stuff with&nbsp;javascript</Tagline>
      <SubTag>React, React Native, and Web3 Developer</SubTag>
      <Button onClick={() => setNav("PORTFOLIO")}>portfolio</Button>
      <Button onClick={() => setNav("SANDBOX")}>sandbox</Button>
      <LinkContainer onClick={handleClick}>
        <StyledAnchor href="https://github.com/reddhouse" target="_blank" rel="noopener noreferrer">See the Code!</StyledAnchor>
        <StyledOctocat src={"GitHub-Mark-32px.png"}/>
      </LinkContainer>
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
  ${props => props.theme.media.mini`
    width: 150px;
    margin-top: 0px;
  `}
`

const Tagline = styled.div`
  margin: 0px 10px;
  font-size: 2.5em;
  ${props => props.theme.media.tablet`font-size: 2em;`}
  ${props => props.theme.media.phone`font-size: 1.85em;`}
`

const SubTag = styled.div`
  margin: 20px 10px;
  font-size: 1.25em;
  ${props => props.theme.media.tablet`font-size: 1em;`}
  ${props => props.theme.media.phone`
    font-size: 1em;
    margin-bottom: 0px;
  `}
  ${props => props.theme.media.mini`
    font-size: 1em;
    margin-bottom: 0px;
  `}
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

  &:hover {
    color: white;
    background-color: ${props => props.theme.color1};
  }
`

const LinkContainer = styled.div`
  margin-top: 40px;
  ${props => props.theme.media.phone`margin-top: 30px;`}
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledOctocat = styled.img`
  width: 18px;
  margin-left: 6px;
`

const StyledAnchor = styled.a`
  color: ${props => props.theme.color2};
`
