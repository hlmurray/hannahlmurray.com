import { injectGlobal } from 'styled-components'
import colors from './colors'

export const GlobalStyle = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');

  html {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Playfair Display', serif;
    text-align: left;
    color: ${colors.grayDark};
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
