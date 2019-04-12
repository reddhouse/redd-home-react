import React, { useState } from 'react'
import styled from 'styled-components'

function ReadMore({ text, maxVisible }) {
  const [hidden, setHidden] = useState(true)

  // If the text is short enough, no need to render the buttons
  if (text.length <= maxVisible) {
    return <Container>{text}</Container>
  }

  return (
    <Container>
      {hidden ? `${text.substr(0, maxVisible).trim()} ...` : text}
      {hidden
        ? <Link onClick={() => setHidden(false)}> read more</Link>
        : <Link onClick={() => setHidden(true)}> read less</Link>
      }
    </Container>
  )
}

export default ReadMore

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`

const Link = styled.a`
  color: ${props => props.theme.color6};
`
Link.defaultProps = {
  theme: {
    color6: "green"
  }
}
