import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReddContext } from '../Store'
import Header from './Header'
import Footer from './Footer'
import Counter from './sandbox/Counter'
import ShoppingList from './sandbox/ShoppingList'
import ReadMore from './sandbox/ReadMore'
import LoginForm from './sandbox/LoginForm'
import DebounceDemo from './sandbox/DebounceDemo'
import MountOnlyEffect from './sandbox/MountOnlyEffect'
import LightSwitch from './sandbox/LightSwitch'
import Counter2 from './sandbox/Counter2'
import Pokemon from './sandbox/Pokemon'
import RockerSwitch from './sandbox/RockerSwitch'
import KeyPress from './sandbox/KeyPress'
import WiggleBox from './sandbox/WiggleBox'
import WiggleBox2 from './sandbox/WiggleBox2'
import Modal from './sandbox/Modal'

export default () => {
  const { setNav } = useContext(ReddContext)

  return (
    <Container>
      <Header location="SANDBOX" />
      <br />

      <div>View the code for each component in <StyledAnchor href="https://github.com/reddhouse/redd-home-react/tree/master/src/components/sandbox" target="_blank" rel="noopener noreferrer">this&nbsp;directory</StyledAnchor>.</div>
      <br />
      <br />

      <b>MountOnlyEffect (useRef w/new form of componentDidMount)</b>
      <MountOnlyEffect />
      <DividerRow><Divider /></DividerRow>

      <b>Counter (useState)</b>
      <Counter />
      <DividerRow><Divider /></DividerRow>

      <b>Shopping List (useRef & useReducer)</b>
      <ShoppingList />
      <DividerRow><Divider /></DividerRow>

      <b>Read More (useState)</b>
      <ReadMore
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        maxVisible={35}
      />
      <ReadMore
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        maxVisible={20}
      />
      <DividerRow><Divider /></DividerRow>

      <b>LoginForm (useState w/state as object)</b>
      <LoginForm />
      <DividerRow><Divider /></DividerRow>

      <b>DebounceDemo (useEffect & custom hook)</b>
      <DebounceDemo />
      <DividerRow><Divider /></DividerRow>

      <b>LightSwitch (useContext & global store)</b>
      <LightSwitch />
      <DividerRow><Divider /></DividerRow>

      <b>Counter2 (useState w/expensive computation)</b>
      <Counter2 />
      <DividerRow><Divider /></DividerRow>

      <b>Pokemon (React Suspense w/graphql)</b>
      <Pokemon />
      <DividerRow><Divider /></DividerRow>

      <b>RockerSwitch (styled-component experiment)</b>
      <RockerSwitch />
      <DividerRow><Divider /></DividerRow>

      <b>KeyPress (customHook)</b>
      <KeyPress />
      <DividerRow><Divider /></DividerRow>

      <b>WiggleBoxes (animation demos)</b>
      <WiggleBox2 />
      <WiggleBox />
      <DividerRow><Divider /></DividerRow>

      <b>Modal (useLayoutEffect)</b>
      <Modal />

      <Footer location="SANDBOX" />
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const DividerRow = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Divider = styled.div`
  flex: 0 1 75%;
  margin: 40px 0px 10px 0px;
  border-top: 1px solid lightgrey;
`

const StyledAnchor = styled.a`
  color: ${props => props.theme.color2};
`
