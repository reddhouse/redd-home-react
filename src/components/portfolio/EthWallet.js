import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Ethereum } from 'styled-icons/fa-brands/Ethereum'

export default () => {
  const [lessons, setLessons] = useState(false)

  return (
    <Container>
      <LogoRow>
        <LogoContainer>ERC20<StyledEthLogo size="36" />Mobile Wallet</LogoContainer>
        <div>2017-2018</div>
      </LogoRow>

      <LinksRow>
        <FixedTitle>Site:</FixedTitle>
        <div>Proprietary iOS + Android Apps</div>
      </LinksRow>

      <LinksRow>
        <FixedTitle>Source:</FixedTitle>
        <div>Closed</div>
      </LinksRow>

      <Blurb>The company I worked for in 2017 & 2018 landed a job with a client who required an Ethereum wallet, through which users could acquire and interact with a handful of ERC20 token contracts from their mobile devices. I built the front-end of the beta version of this app using React Native.</Blurb>

      <Title>Technology:</Title>
      <div>- React Native codebase compiled to separate iOS and Android builds.</div>
      <div>- BIP39 nmemonic phrase as seed for HD32 wallet, with locally stored, encrypted private key.</div>
      <div>- Web3js-enabled communication with an INFURA node.</div>
      <div>- Deployed to test devices with Expo and Fabric (Fastlane).</div>

      <Title>Lessons Learned:</Title>
      <div onClick={() => setLessons(lessons => !lessons)}>
        { lessons
          ? <Toggle>Hide Lessons [&ndash;]</Toggle>
          : <Toggle>Click to Expand [+]</Toggle>
        }
      </div>

      { lessons
        ? <LessonsContainer>
          <div>1. This app solidified my appreciation for "functions over frameworks" as I transitioned (back) to React, having worked with Vue.js on a few preceding projects.</div>
          <div>2. Ethereum, as it was intended to be used by its decentralization-focused founders, asks a lot from users compared to the experience they are accustomed to in centralized services/apps.</div>
          <div>3. Just because everyone else is using ____, doesn't mean it's better or necessary. Javascript developers frequently reach for solutions to problems they haven't encountered yet.</div>
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', 'Verdana', 'Geneva', sans-serif;
  font-size: 2em;
  ${props => props.theme.media.phone`font-size: 1.5em;`}
  ${props => props.theme.media.mini`font-size: 1.5em;`}
  font-weight: 500;
`

const StyledEthLogo = styled(Ethereum)`
  vertical-align: text-top;
  display:inline;
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
