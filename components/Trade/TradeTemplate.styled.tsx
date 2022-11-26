import styled from 'styled-components'

export const Trade = styled.main`
  display: grid;
  grid-template-rows: 68px 320px 160px 160px auto;
  grid-template-columns:
    1fr minmax(253px, 320px) minmax(510px, 880px) minmax(253px, 320px)
    1fr;
  grid-template-areas:
    'left subHeader subHeader market right'
    'left orderbook chart market right'
    'left orderbook chart trades right'
    'left orderbook orderform trades right'
    'left orderbook orderform trades right';
  grid-gap: 1px;
  margin-top: 1px;
`

export const Left = styled.section`
  grid-area: left;
`

export const Right = styled.section`
  grid-area: right;
`
