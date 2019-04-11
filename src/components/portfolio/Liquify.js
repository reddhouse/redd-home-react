import React, { useState } from 'react'
import styled, { css } from 'styled-components'

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
        <StyledAnchor href="https://liquify.us/" target="_blank" rel="noopener noreferrer">https://liquify.us/</StyledAnchor>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <StyledAnchor href="https://github.com/reddhouse/liquify-web" target="_blank" rel="noopener noreferrer">https://github.com/reddhouse/liquify-web</StyledAnchor>
      </LinksRow>

      <Blurb>Liquify is a political-tech proof of concept that demonstrates how voters and their represenatives might utilize liquid democracy in the legislative process.</Blurb>
      <Blurb2>The website mimics a chat app, which I assumed was the most recognizable interface across the demographic range of intended users/voters.</Blurb2>

      <Title>Technology:</Title>
      <div>- Clean, stateful React function components with React Hooks.</div>
      <div>- All lifecycle methods handled by useEffect.</div>
      <div>- Global state managed with the React Context API.</div>
      <div>- Deployed with Zeit Now's @now/static-build.</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        { lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      { lessons
        ? <LessonsContainer>
          <div>1. React Hooks reduce "wrapper hell" and eliminate overuse of HOCs, render props, and other abstractions. I think Hooks are a monumental upgrade (not just a new, shiny), and I look forward to amassing a library of reusable components that do stateful things the Hooks way.</div>
          <div>2. In previous apps I spent a lot of time configuring Redux actions, reducers, and sagas. React's Context API is way easier to implement, and if things ever started to get squirrelly, I'd reach for the useReducer hook first, before Redux.</div>
          <div>3. I started out experimenting with CSS Grid instead of Flexbox, but after playing around a bit, it appeared that Flexbox can handle (almost) everything I need layout-wise. Column-gap for Flex layouts would seal the deal, but it might be a while yet (google W3 org's CSS Box Alignment Module Level 3).</div>
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
  margin: 20px 0px;
`

const LogoContainer = styled.div`
  margin-left: -4px;
  @import url('https://fonts.googleapis.com/css?family=Righteous');
  font-family: 'Righteous', 'Verdana', cursive;
  font-size: 2.5em;
  ${props => props.theme.media.phone`font-size: 2em;`}
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
  flex: 0 0 100px;
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

const Blurb2 = styled.div`
  margin-top: 6px;
  font-size: .9em;
  font-style: italic;
`

const Toggle = styled.div`
  color: ${props => props.theme.color2};
`

const LessonsContainer = styled.div`

`
