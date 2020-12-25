import { createGlobalStyle } from 'styled-components'

const $fOpenSans = 'OpenSans'
const $fRoboto = 'Roboto'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: normal;
    font-weight: 300;
    src: url('../public/fonts/OpenSans-Light.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: italic;
    font-weight: 300;
    src: url('../public/fonts/OpenSans-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: normal;
    font-weight: 400;
    src: url('../public/fonts/OpenSans-Regular.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: italic;
    font-weight: 400;
    src: url('../public/fonts/OpenSans-Italic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: normal;
    font-weight: 500;
    src: url('../public/fonts/OpenSans-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: italic;
    font-weight: 500;
    src: url('../public/fonts/OpenSans-SemiBoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: normal;
    font-weight: 600;
    src: url('../public/fonts/OpenSans-Bold.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: italic;
    font-weight: 600;
    src: url('../public/fonts/OpenSans-BoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: normal;
    font-weight: 700;
    src: url('../public/fonts/OpenSans-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fOpenSans};
    font-style: italic;
    font-weight: 700;
    src: url('../public/fonts/OpenSans-ExtraBoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: normal;
    font-weight: 300;
    src: url('../public/fonts/Roboto-Light.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: italic;
    font-weight: 300;
    src: url('../public/fonts/Roboto-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: normal;
    font-weight: 400;
    src: url('../public/fonts/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: italic;
    font-weight: 400;
    src: url('../public/fonts/Roboto-Italic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: normal;
    font-weight: 600;
    src: url('../public/fonts/Roboto-Bold.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: italic;
    font-weight: 600;
    src: url('../public/fonts/Roboto-BoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: normal;
    font-weight: 800;
    src: url('../public/fonts/Roboto-Black.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: ${$fRoboto};
    font-style: italic;
    font-weight: 800;
    src: url('../public/fonts/Roboto-BlackItalic.ttf') format('truetype');
  }

  html {
    min-width: 375px;
    font-family: ${$fRoboto}, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  object,
  iframe,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  code,
  em,
  img,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  b,
  u,
  i,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  main,
  canvas,
  embed,
  footer,
  header,
  nav,
  section,
  video {
    padding: 0;
    border: 0;
    margin: 0;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-size-adjust: none;
    vertical-align: baseline;
  }

  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input {
    -webkit-appearance: none;
    border-radius: 0;
  }
`
export default GlobalStyle
