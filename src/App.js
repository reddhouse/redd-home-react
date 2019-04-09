import React from 'react'
import { ThemeProvider, css } from 'styled-components'
import Main from './Main'
import Store from './Store'

function App() {
  return (
    <ThemeProvider theme={reddTheme}>
      <Store>
        <Main />
      </Store>
    </ThemeProvider>
  )
}

export default App

/***************************** Media Query Config *****************************/

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

// Iterate through the sizes and create a media template.
// Use values in styled components like ${media.phone`display: none;`} */} or,
// with a theme, ${props => props.theme.media.phone`max-height: 85vh;`}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

/**************************** Styled Theme Config ****************************/

const reddTheme = {
  media: media,

  color1: "#3B8070",
  color2: "#41B883",
  color3: "#478547",
  color4: "#bd5757"
}
