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
  grid-gap: 1px;
  margin-top: 1px;

  & > div:nth-of-type(1) {
    grid-area: left;
    background-color: ${({ theme }) => theme.colors.bgColor};
  }

  & > div:nth-of-type(7) {
    grid-area: right;
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`
