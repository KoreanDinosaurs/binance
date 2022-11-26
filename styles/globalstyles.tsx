import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-yellow-100: #f0b90b;

    --color-gray-50: #fafafa;
    --color-gray-70: #f2f3f5;
    --color-gray-100: #f5f5f5;
    --color-gray-200: #eeeeee;
    --color-gray-300: #e0e0e0;
    --color-gray-400: #707a8a;

    --color-border: #eef0f2;
  }
  html,
  body {
    color: ${({ theme }) => theme.colors.textColor};
    background-color: #eef0f2;
    font-family: 'Noto Sans KR', sans-serif;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  section, header, footer {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul, li {
    list-style: none;
    cursor: pointer;
  }
  svg {
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
