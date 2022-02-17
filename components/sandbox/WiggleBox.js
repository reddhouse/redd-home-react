import styled from 'styled-components'

function WiggleBox() {
  return (
    <Container>
      <Trigger>
        <Box />
      </Trigger>
    </Container>
  )
}

export default WiggleBox

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`

// Before using the Trigger wrapper, box gets whacky because it moves relative
// to the mouse/hover
// const Box = styled.div`
//   display: inline-block;
//   background: pink;
//   width: 200px;
//   height: 200px;
//   transition: transform 300ms ease-in-out;
//
//   &:hover {
//     transform: translate(200px, 150px) rotate(20deg)
//   }
// `

const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  transition: transform 300ms ease-in-out;
`
const Trigger = styled.div`
  width: 200px;
  height: 200px;
  border: 20px solid #999;
  background: #ddd;

  ${'' /* Get schooled on CSS combinators: https://www.w3schools.com/css/css_combinators.asp
          Here we select all Box components that are descendants of trigger components,
          which are currently in the state of hover. Apply this transform on said Box */}
  &:hover ${Box} {
    transform: translate(200px, 150px) rotate(20deg);
  }
`
// Note that the pink box still transitions as you hover it. If you want the box
// to only transition when your mouse hovers the ‘Trigger’ box and not the pink
// ‘Box’, then set ‘pointer-events: none’ on ‘Box’. setting ‘pointer-events’ to
// none, means ‘:hover’ won’t work on Box, but it will work on ‘Trigger’, which
// then applies the transform onto ‘Box’.
