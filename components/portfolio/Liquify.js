import { useState } from 'react'
import styled from 'styled-components'

export default () => {
  const [lessons, setLessons] = useState(false)

  return (
    <Container>
      <LogoRow>
        <LogoContainer>
          <KnockoutText>Liquify</KnockoutText>
        </LogoContainer>
        <div>2019</div>
      </LogoRow>

      <LinksRow>
        <FixedTitle>Site:</FixedTitle>
        <div>Retired</div>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <StyledAnchor href="https://github.com/reddhouse/liquify-web" target="_blank" rel="noopener noreferrer">https://github.com/reddhouse/liquify-web</StyledAnchor>
      </LinksRow>

      <Blurb>Liquify is a political-tech proof of concept that demonstrates how voters and their represenatives might utilize liquid democracy in the legislative process. The website mimics a chat app, which I assumed is the most recognizable interface across the demographic range of intended users/voters.</Blurb>

      <Title>Technology:</Title>
      <div>- Clean, stateful React function components with React Hooks.</div>
      <div>- All lifecycle methods handled by useEffect.</div>
      <div>- Global state managed with the React Context API.</div>
      <div>- Custom router (React-Router would have been overkill).</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        {lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      {lessons
        ? <LessonsContainer>
          <div><b>1.</b> As promised, React Hooks do indeed reduce "wrapper hell" and eliminate overuse of HOCs, render props, and other abstractions. I think Hooks are a monumental upgrade (not just a new, shiny), and I look forward to building a library of reusable components that do stateful things the Hooks way.</div>
          <div><b>2.</b> In previous apps I spent a lot of time configuring Redux actions, reducers, and sagas. React's Context API is way easier to implement, and if things ever started to get squirrelly, I'd reach for the useReducer Hook first, before Redux.</div>
          <div><b>3.</b> I started out experimenting with CSS Grid instead of Flexbox, but after playing around a bit, it appeared that Flexbox can handle (almost) everything I need layout-wise. Column-gap for Flex layouts would be a nice bonus, but it might be a while yet (see progress on W3 org's CSS Box Alignment Module Level 3).</div>
        </LessonsContainer>
        : <div></div>
      }

    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  word-break: break-word;
`
const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 25px 0px;
`
const LogoContainer = styled.div`
  margin-left: -4px;
  font-family: 'Righteous', 'Verdana', cursive;
  font-size: 2.5em;
  ${props => props.theme.media.phone`font-size: 2.25em;`}
  ${props => props.theme.media.mini`font-size: 2em;`}
  font-weight: 500;
`
const KnockoutText = styled.div`
  background: url("./liquid-backdrop.jpg") center;
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
const LinksRow = styled.div`
  display: flex;
`
const FixedTitle = styled.div`
  flex: 0 0 70px;
  font-weight: bold;
`
const Title = styled.div`
  margin-top: 20px;
  font-weight: bold;
`
const StyledAnchor = styled.a`
  color: ${props => props.theme.color2};
`
const Blurb = styled.div`
  margin-top: 20px;
  font-size: .9em;
  font-style: italic;
`
const Toggle = styled.div`
  color: ${props => props.theme.color2};
  cursor: pointer;
`
const LessonsContainer = styled.div`
  margin-top: 6px;
`
