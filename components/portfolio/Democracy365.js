import { useState } from 'react'
import styled from 'styled-components'

export default () => {
  const [lessons, setLessons] = useState(false)

  return (
    <Container>
      <LogoRow>
        <LogoContainer>democracy<GoldSpan>365</GoldSpan></LogoContainer>
        <div>2021-2022</div>
      </LogoRow>

      <LinksRow>
        <FixedTitle>Site:</FixedTitle>
        <StyledAnchor href="https://democracy365.app" target="_blank" rel="noopener noreferrer">https://democracy365.app</StyledAnchor>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <StyledAnchor href="https://github.com/reddhouse/democracy365" target="_blank" rel="noopener noreferrer">https://github.com/reddhouse/democracy365</StyledAnchor>
      </LinksRow>

      <Blurb>The democracy365 web app is the culmination of all my previous liquid democracy experiments, but my first to be powered by a fully functional, custom built back-end.</Blurb>

      <Title>Technology:</Title>
      <div>- AWS CloudFormation-instantiated resources, including VPC, RDS, Lambda, API Gateway, and EventBridge services, configured from scratch without a back-end framework.</div>
      <div>- Postgres database with business logic written primarily in SQL, or PL/pgSQL stored procedures.</div>
      <div>- Serverless back-end with Node.js-runtime Lambda functions.</div>
      <div>- Pre-rendered Javascript on the front-end, utilizing both static-site generation, and server-side rendering with Vercel.</div>
      <div>- Zero front-end dependencies aside from Next.js, React, and styled-components.</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        {lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      {lessons
        ? <LessonsContainer>
          <div><b>1.</b> Infrastructure as code is awesome. There are a million different ways solve problems in the AWS console, but a single source of truth in one or more CloudFormation file(s) made me feel in total control of hundreds of moving parts.</div>
          <div><b>2.</b> Serverless development is tedious, complicated, and (relatively) expensive, but the peace of mind provided still makes it seem worthwhile.</div>
          <div><b>3.</b> Postgres was a real joy, and similar to IaC and cloud functions, a huge confidence booster in terms of feeling like this app could work correctly with minimal oversight for years to come.</div>
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
  padding: 0px 5px;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 2em;
  ${props => props.theme.media.phone`font-size: 2em;`}
  font-weight: 500;
  color: white;
  background-color: ${props => props.theme.color7};
`
const GoldSpan = styled.span`
  color: ${props => props.theme.color8};
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
