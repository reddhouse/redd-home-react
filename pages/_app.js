import { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import Head from "next/head"
import GlobalStore from '../lib/Store'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reddhouse</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Righteous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Arimo"
        />
        <link rel="shortcut icon" href="/red-house-tiny-square.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/red-house-tiny-square.png"/>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={reddTheme}>
        <GlobalStore>
          <Component {...pageProps} />
        </GlobalStore>
      </ThemeProvider>
    </>
  )
}

/***************************** Media Query Stuff *****************************/

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
  mini: 320
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

/***************************** Styled Components *****************************/

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2e2f30;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2e2f30;
  }
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2e2f30;
  }
`

const reddTheme = {
  media: media,

  color1: "#3B8070",
  color2: "#41B883",
  color3: "#262626", // SureVote dark grey
  color4: "#2e2f30", // Default dark grey (see index.html)
  color5: "#478547",
  color6: "#bd5757",
  color7: "#404040", // democracy365 dark grey
  color8: "#ffe033"  // democracy365 gold
}
