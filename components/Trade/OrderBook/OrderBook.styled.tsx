import styled from 'styled-components'

export const OrderBook = styled.section`
  grid-area: orderbook;
  display: flex;
  flex-direction: column;
`

export const CoinPrice = styled.div`
  span:nth-of-type(1) {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
  span:nth-of-type(2) {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.subColor};
  }
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
`
