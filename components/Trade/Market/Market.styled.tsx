import styled from 'styled-components'

export const Market = styled.section`
  grid-area: market;
  display: flex;
  flex-direction: column;
`

export const MarketTab = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  color: var(--color-gray-400);
  font-weight: 600;
  padding: 0 1.2rem;

  svg {
    &:hover {
      fill: var(--color-yellow-100);
    }
  }
`

export const MarketTabItem = styled.div<{ select: boolean }>`
  cursor: pointer;
  ${({ select }) => select && 'color: var(--color-yellow-100);'}
  &:hover {
    color: var(--color-yellow-100);
  }
`
