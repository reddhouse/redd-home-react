import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Suitcase } from 'styled-icons/fa-solid'

export default () => {
  const [lessons, setLessons] = useState(false)

  return (
    <Container>
      <LogoRow>
        <LogoContainer>Strebor<StyledSuitcase size="36" />Spades</LogoContainer>
        <div>2017</div>
      </LogoRow>

      <LinksRow>
        <FixedTitle>Site:</FixedTitle>
        <StyledAnchor href="https://strebor-spades.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">https://strebor-spades.herokuapp.com/#/</StyledAnchor>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <StyledAnchor href="https://github.com/reddhouse/strebor-spades" target="_blank" rel="noopener noreferrer">https://github.com/reddhouse/strebor-spades</StyledAnchor>
      </LinksRow>

      <Blurb>Growing up, my friends and I played the card game Spades pretty regularly. On the way to school, we'd sneak in a quick game in the aisle of the school bus, using my trumpet case as a table. This basic web app provides a virtual card table where participants can play a live game from different locations. It can be run alongside a Google Hangout (in a separate browser window), or, if two teammates share the same physical space, the "Mobile" link allows them to discreetly view their hands on a mobile device.</Blurb>

      <Title>Technology:</Title>
      <div>- Vue.js front-end, JSON-Server back end.</div>
      <div>- REST API access to data stored in a single JSON document.</div>
      <div>- Redux-style state management with Vuex.</div>
      <div>- Routing by Vue-Router.</div>
      <div>- Deployed to Heroku.</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        { lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      { lessons
        ? <LessonsContainer>
          <div>1. This app continually polls the server for changes to the hands and table. WebSockets would have saved a lot of network traffic.</div>
          <div>2. I created more complexity than was probably necessary by using Vuex. A real-time database like Firebase would have been much faster.</div>
          <div>3. Javascript is not as pretty as Elixir or Python, but ES6 improvements are making things much more enjoyable for today's web devs.</div>
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
  @import url('https://fonts.googleapis.com/css?family=Arimo');
  font-family: 'Arimo', Arial, sans-serif;
  font-size: 2.5em;
  ${props => props.theme.media.phone`font-size: 2em;`}
  ${props => props.theme.media.mini`font-size: 1.75em;`}
`

const StyledSuitcase = styled(Suitcase)`
  vertical-align: text-bottom;
  display:inline;
  margin: 0px 5px 5px 5px;
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

const Toggle = styled.div`
  color: ${props => props.theme.color2};
`

const LessonsContainer = styled.div`

`
