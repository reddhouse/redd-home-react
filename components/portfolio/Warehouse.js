import { useState } from 'react'
import styled from 'styled-components'
import { BoxOpen } from '@styled-icons/fa-solid'

export default () => {
  const [lessons, setLessons] = useState(false)

  return (
    <Container>
      <LogoRow>
        <LogoContainer>Warehouse Management System<StyledBox size="36" /></LogoContainer>
        <div>2022-2023</div>
      </LogoRow>

      <LinksRow>
        <FixedTitle>Product:</FixedTitle>
        <div>Proprietary Node.js Applications</div>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <div>Closed</div>
      </LinksRow>

      <Blurb>My work for this Toronto-based, 3rd-party Logistics company was my first foray into enterprise-scale (albeit startup-paced) software development. It was a huge eye-opener in terms of the differences between greenfield development and the special care a large production codebase requires in order to remain intelligible and performant.</Blurb>

      <Title>Technology:</Title>
      <div>- End to end Typescript (NestJS back-end + React SPA front-end).</div>
      <div>- TypeORM abstraction over PostgreSQL.</div>
      <div>- ReactQuery for data fetching and mutations.</div>
      <div>- Recoil for global state management.</div>
      <div>- Ant Design UI library.</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        {lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      {lessons
        ? <LessonsContainer>
          <div><b>1.</b> Life would be easier if more people <StyledAnchor href="https://grugbrain.dev/" target="_blank" rel="noopener noreferrer">feared the complexity demon</StyledAnchor>. I would be perfectly happy writing 10x the amount of code in order to avoid adding another dependency, or abstraction layer.</div>
          <div><b>2.</b> Your ORM should be buried with your MVP; they allow fast iteration, but are not worth the costs in the long run.</div>
          <div><b>3.</b> Your company is a corporation and owes you nothing (unless you're a shareholder), but if the bottom line means more than the actual humans that contribute to the company's success, what are we doing here?</div>
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', 'Verdana', 'Geneva', sans-serif;
  font-size: 1.5em;
  ${props => props.theme.media.phone`font-size: 1.75em;`}
  ${props => props.theme.media.mini`font-size: 1.5em;`}
`
const StyledBox = styled(BoxOpen)`
  vertical-align: text-bottom;
  display:inline;
  margin-left: 6px;
  ${props => props.theme.media.phone`margin-bottom: 0px;`}
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
