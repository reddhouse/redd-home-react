import { useState } from 'react'
import styled from 'styled-components'

export default () => {
  const [lessons, setLessons] = useState(false)

  return (
    <Container>
      <LogoRow>
        <LogoContainer><LogoRed>Sure</LogoRed><LogoBlack>Vote</LogoBlack></LogoContainer>
        <div>2017</div>
      </LogoRow>

      <LinksRow>
        <FixedTitle>Site:</FixedTitle>
        <StyledAnchor href="http://surevote.org" target="_blank" rel="noopener noreferrer">http://surevote.org</StyledAnchor>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <StyledAnchor href="https://github.com/reddhouse/surevote" target="_blank" rel="noopener noreferrer">https://github.com/reddhouse/surevote</StyledAnchor>
      </LinksRow>

      <Blurb>I built SureVote around the time I was learning about blockchain-secured assets. It was intended to demonstrate how citizens might use Vote tokens to find common ground and remove legislative roadblocks. The political climate in 2017 was (and remains) incredibly vitriolic, full of fake news, false choices, and finger pointing, but I believe there is a role for technology to play in helping people build trust.</Blurb>

      <Title>Technology:</Title>
      <div>- A Vue.js serverless, static web app.</div>
      <div>- Webpack bundled, hosted on AWS S3.</div>
      <div>- Redux style state management a la Vuex.</div>
      <div>- Firebase authentication and real-time database.</div>
      <div>- Reusable stateless components with "props down, events up" architecture.</div>
      <div>- Mobile first, responsive CSS with a custom Flexbox grid/scaling system.</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        {lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      {lessons
        ? <LessonsContainer>
          <div><b>1.</b> Good design is very hard, and time consuming relative to the javascript work required.</div>
          <div><b>2.</b> I probably should have practiced using a CSS framework rather than build a custom template.</div>
          <div><b>3.</b> Firebase has plenty of critics, but it worked well for this simple project.</div>
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
  font-family: 'Arimo', Arial, sans-serif;
  font-size: 2.5em;
  ${props => props.theme.media.phone`font-size: 2em;`}
  ${props => props.theme.media.mini`font-size: 1.75em;`}
  font-weight: 500;
`
const LogoRed = styled.span`
  color: firebrick;
`
const LogoBlack = styled.span`
  color: ${props => props.theme.color3};
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
