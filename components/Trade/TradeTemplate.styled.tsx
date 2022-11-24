import styled from 'styled-components'

export const Trade = styled.main`
  display: grid;
  grid-template-rows: 68px 320px 160px 1.15fr auto 285px;
  grid-template-columns:
    1fr minmax(253px, 320px) minmax(510px, 880px) minmax(253px, 320px)
    1fr;
  grid-template-areas:
    'left subHeader subHeader market right'
    'left orderbook chart market right'
    'left orderbook chart trades right'
    'left orderbook orderform trades right'
    'left orderbook orderform marketActivity right'
    'left basictable basictable basictable right';
  & div:nth-of-type(1) {
    grid-area: left;
    background: red;
  }
  & div:nth-of-type(2) {
    grid-area: subHeader;
    background: coral;
  }

  & div:nth-of-type(3) {
    grid-area: market;
    background: brown;
  }
  & div:nth-of-type(4) {
    grid-area: orderbook;
    background: lightgrey;
  }
  & div:nth-of-type(5) {
    grid-area: chart;
    background: blue;
  }
  & div:nth-of-type(6) {
    grid-area: trades;
    background: pink;
  }
  & div:nth-of-type(7) {
    grid-area: orderform;
    background: orange;
  }
  & div:nth-of-type(8) {
    grid-area: marketActivity;
    background: yellow;
    height: 200px;
  }
  & div:nth-of-type(9) {
    grid-area: basictable;
    background: green;
  }
  & div:nth-of-type(10) {
    grid-area: right;
    background: red;
  }
`
