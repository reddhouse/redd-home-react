import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'

export default ({ location }) => {
  const { setNav } = useContext(ReddContext)

  return (
    <Container>
      <NavRow>
        <StyledImage src={"red-house-tiny-square.png"} onClick={() => setNav("HOME")}/>
        <NavItem
          itemID="HOME"
          location={null}
          onClick={() => setNav("HOME")}>
          Home
        </NavItem>

        <Pipe>&nbsp;</Pipe>

        <NavItem
          itemID="PORTFOLIO"
          location={location}
          onClick={() => setNav("PORTFOLIO")}>
          &nbsp;Portfolio
        </NavItem>

        <NavItem
          itemID="SANDBOX"
          location={location}
          onClick={() => setNav("SANDBOX")}>
          &nbsp;Sandbox
        </NavItem>

      </NavRow>
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const NavRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 60px;
  padding-top: 14px;
  ${props => props.theme.media.phone`
    margin-bottom: 32px;
    padding-top: 6px;
  `}
  border-top: 1px solid lightgrey;
  color: red;
`

const NavItem = styled.div`
  ${props => props.location == props.itemID && css`
    display: none;
  `}
  cursor: pointer;
`

const StyledImage = styled.img`
  width: 18px;
  margin-bottom: 4px;
  margin-right: 4px;
  cursor: pointer;
`

const Pipe = styled.div`
  border-right: 1px solid lightgrey;
`
