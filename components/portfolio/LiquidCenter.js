import { useState } from 'react'
import styled from 'styled-components'

export default () => {
  const [lessons, setLessons] = useState(false)

  return (
    <Container>
      <LogoRow>
        <LogoContainer>Liquid Center</LogoContainer>
        <div>2019</div>
      </LogoRow>

      <LinksRow>
        <FixedTitle>Site:</FixedTitle>
        <StyledAnchor href="https://liquidcenter.org/" target="_blank" rel="noopener noreferrer">https://liquidcenter.org/</StyledAnchor>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <StyledAnchor href="https://github.com/reddhouse/liquid-center" target="_blank" rel="noopener noreferrer">https://github.com/reddhouse/liquid-center</StyledAnchor>
      </LinksRow>

      <Blurb>In order to spread the word about liquid democracy, I needed an easy way to share specific articles written for various audiences. It was important that readers gain an understanding of the broader aims of the organization by easily jumping "out" of an endpoint, and "in" to a carefully arranged set of featured posts on the homepage.</Blurb>
      <Blurb2>It was also important that I maintained full creative control over my content, using technologies I prefer. Hence, blog services like Medium and Ghost were out of the question. The entire site is written from scratch using Ghost's Casper theme as inspiration.</Blurb2>

      <Title>Technology:</Title>
      <div>- Built inside of the excellent Next.js framework.</div>
      <div>- CSS in JS with Styled-Components.</div>
      <div>- Responsive images per HTML's srcSet attribute & CSS's image-set for background pics.</div>
      <div>- Signups stored in Firebase Cloud Firestore.</div>
      <div>- Deployed with Zeit Now's @now/static-build.</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        {lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      {lessons
        ? <LessonsContainer>
          <div><b>1.</b> Next.js was a perfect solution for this site given the ease of establishing stand-alone static websites at each Next "Page" (beneficial for SEO, among other reasons).</div>
          <div><b>2.</b> Zeit's Now service blows my mind. It's crazy what they are giving away in their free tier, and they never seem to stop shipping new updates.</div>
          <div><b>3.</b> It was gratifying to see Dan Abramov come to <StyledAnchor href="https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae" target="_blank" rel="noopener noreferrer">the same conclusion</StyledAnchor> I did regarding building his own blog site.</div>
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
  font-family: 'Montserrat', 'Verdana', 'Geneva', sans-serif;
  font-size: 2.5em;
  ${props => props.theme.media.phone`font-size: 2em;`}
  ${props => props.theme.media.mini`font-size: 1.75em;`}
  font-weight: 500;
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
const Blurb2 = styled.div`
  margin-top: 6px;
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
