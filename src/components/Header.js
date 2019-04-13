import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'

export default ({ location }) => {
  const { setNav } = useContext(ReddContext)

  return (
    <Container>
      <NavRow>

        <NavItem
          itemID="PORTFOLIO"
          location={location}
          onClick={() => setNav("PORTFOLIO")}>
          Portfolio&nbsp;
        </NavItem>

        <NavItem
          itemID="SANDBOX"
          location={location}
          onClick={() => setNav("SANDBOX")}>
          Sandbox&nbsp;
        </NavItem>

        <Pipe>&nbsp;</Pipe>

        <NavItem
          itemID="HOME"
          location={null}
          onClick={() => setNav("HOME")}>
          Home&nbsp;
        </NavItem>
        <StyledImage src={"red-house-tiny-square.png"} onClick={() => setNav("HOME")}/>

      </NavRow>
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const NavRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 14px;
  ${props => props.theme.media.phone`
    margin-top: 14px;
    padding-bottom: 8px;
  `}
  border-bottom: 1px solid lightgrey;
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
  cursor: pointer;
`

const Pipe = styled.div`
  border-left: 1px solid lightgrey;
`
