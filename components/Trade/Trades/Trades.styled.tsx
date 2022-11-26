import styled from 'styled-components'

export const Trades = styled.section`
  grid-area: trades;
  display: flex;
  flex-direction: column;
`

export const TradesTabs = styled.div<{ idx: number }>`
  display: flex;
  gap: 1rem;
  padding: 1rem 1rem 0.5rem;
  ${({ idx }) => `& div:nth-of-type(${idx + 1}){
    color: var(--color-yellow-100);
    font-weight: 600;
  }`}
`

export const Tab = styled.div`
  font-size: 0.9rem;
  letter-spacing: -0.03rem;
  width: 100px;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  &:hover {
    color: var(--color-yellow-100);
  }
`
