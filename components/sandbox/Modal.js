import { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'

// Credit Gabe Ragland: https://usehooks.com/useLockBodyScroll/

// Modal uses an effect that mutates the DOM (via a DOM node ref) which might
// change the appearance of the DOM node between the time that it is rendered and
// when the effect mutates it, so we use useLayoutEffect instead of useEffect to
// prevent a flicker when the DOM mutations take effect.

// useLayoutEffect runs synchronously immediately after React has performed all
// DOM mutations. This can be useful if you need to make DOM measurements (like
// getting the scroll position or other styles for an element) and then make DOM
// mutations or trigger a synchronous re-render by updating state.

function Content() {
  const terms = [
    'stars',
    'birds',
    'puppy',
    'nature',
    'snow',
    'cafe',
    'hipster',
    'startup',
    'salad',
    'funny'
  ]

  const images = terms.map(term => (
    <Image key={term} src={`https://source.unsplash.com/random/800x200?${term}`} alt="" />
  ))

  return <div>{images}</div>
}


function Modal({ title, content, onClose }) {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => document.body.style.overflow = 'visible'
  }, []) // Empty array ensures effect is only run on mount and unmount

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <h2>{title}</h2>
        <p>{content}</p>
      </ModalContent>
    </ModalOverlay>
  )
}


function ModalExample() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Container>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      <Content />
      {
        modalOpen && (
          <Modal
            title="Try scrolling"
            content="I bet you you can't! Muahahaha 😈"
            onClose={() => setModalOpen(false)}
          />
        )
      }
    </Container>
  )
}

export default ModalExample

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
  max-width: 500px;
`
const Image = styled.img`
  width: 90%;
`
const ModalOverlay = styled.div`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const ModalContent = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 2rem 3rem;
  text-align: center;
`
