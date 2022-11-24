import styled from 'styled-components'

export const SubHeader = styled.section`
  grid-area: subHeader;
  padding: 10px 16px;
  display: flex;
  /* background: blue; */
`

export const Coin = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 1px solid var(--color-border);
`

export const CoinInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const CoinInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  gap: 0.1rem;

  & div:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.subColor};
  }
  & div:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.textColor};
  }
`
