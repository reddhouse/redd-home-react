import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { GlobalContext } from '../lib/Store'

export default ({ location }) => {
  const { setNav } = useContext(GlobalContext)

  return (
    <Container>
      <NavRow>
        <StyledImage src={"red-house-tiny-square.png"} onClick={() => setNav("HOME")} />
        <NavItem
          itemID="HOME"
          location={null}
          onClick={() => setNav("HOME")}>
          Home
        </NavItem>

        <VerticalBar>&nbsp;</VerticalBar>

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
      <Filler>&nbsp;</Filler>
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
  padding-top: 14px;
  ${props => props.theme.media.phone`
    padding-top: 8px;
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
const VerticalBar = styled.div`
  border-right: 1px solid lightgrey;
`
const Filler = styled.div`
  width: 100%;
  min-height: 112px;
`
