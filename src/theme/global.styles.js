import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme: { breakpoint } }) => Object.entries(breakpoint).map(([ key, value ]) => `--breakpoint-${key}: ${value};`)}
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #efefef;
  }

`
export default GlobalStyle
