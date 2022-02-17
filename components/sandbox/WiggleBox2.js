import styled, { css, keyframes } from 'styled-components'

function WiggleBox2() {
  return (
    <Container>
      <Trigger>
        <Box />
      </Trigger>
    </Container>
  )
}

export default WiggleBox2

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
const Box = styled.div`
  display: inline-block;
  background: yellow;
  width: 200px;
  height: 200px;
  position: relative;
`
// Keyframes with the animation property can give you finer control over your animations
// than CSS transitions, although being more verbose.
// Imagine the life of your animation is specified by a timeline of keyframes from
// 0% to 100%, you could specify from 0% to 100% that you want the animation to
// animate a height of 200px to 600px:
const keyFrameExample = keyframes`
  0% {
    height: 200px;
  }
  ${'' /* Also grow in width from 0px to 400px from 0% to 30% of the keyframe timeline,
        and maintain that width until the end of the keyframe timeline */}
  30%, 100% {
    width: 400px;
  }
  100% {
    height: 400px;
    background: orange;
  }
`
const Trigger = styled.div`
  width: 200px;
  height: 200px;
  border: 20px solid #999;
  background: #ddd;
  &:hover ${Box} {
    animation: ${keyFrameExample} 4s ease-in-out 0s infinite;
  }
`
