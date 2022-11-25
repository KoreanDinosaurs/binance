import styled from 'styled-components'

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > svg {
    position: absolute;
    fill: var(--color-gray-400);
    left: 7px;
  }
`

export const TableHead = styled.div`
  display: flex;
  font-size: 0.7rem;
  color: var(--color-gray-400);
  line-height: 24px;
  padding: 0 1rem;

  & div:nth-of-type(1) {
    flex: 5 1 0;
    display: flex;
    justify-content: flex-start;
  }
  & div:nth-of-type(2) {
    flex: 3 1 0;
    display: flex;
    justify-content: flex-end;
  }
  & div:nth-of-type(3) {
    flex: 5 1 0;
    display: flex;
    justify-content: flex-end;
  }
`

export const TableBody = styled.div<{
  start: number
  mode: string
}>`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: var(--color-gray-400);
  flex-grow: 1;

  & > div {
    ${({ mode }) =>
      mode == 'buy'
        ? ` border-top: 1px dotted transparent;`
        : ' border-bottom: 1px dotted transparent;'}
  }

  & > div:hover {
    ${({ mode }) =>
      mode == 'buy'
        ? `border-top: 1px dotted black;`
        : 'border-bottom: 1px dotted black;'}
  }

  &:hover {
    ${({ start, mode }) =>
      mode == 'buy'
        ? `& > div:nth-child(n+${start}) {
      background: var(--color-gray-70);
    }`
        : `& > div:nth-child(-n + ${start}) {
      background: var(--color-gray-70);
    }`}
  }
`

export const TableBodyItem = styled.div<{ mode: string }>`
  display: flex;
  line-height: 20px;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  cursor: pointer;

  & > div:nth-of-type(1) {
    flex: 5 1 0;
    display: flex;
    justify-content: flex-start;
    color: ${({ mode }) => (mode == 'buy' ? '#cf304a' : '#03a66d')};
    font-weight: 600;
  }
  & > div:nth-of-type(2) {
    flex: 3 1 0;
    display: flex;
    justify-content: flex-end;
  }
  & > div:nth-of-type(3) {
    flex: 5 1 0;
    display: flex;
    justify-content: flex-end;
  }
`

export const ProgressBar = styled.div<{ mode: string; percentage: number }>`
  z-index: 1;
  position: absolute;
  right: 0px;
  height: 100%;
  width: ${({ percentage }) => (percentage > 100 ? '100%' : `${percentage}%`)};
  background: ${({ mode }) =>
    mode == 'buy' ? 'rgba(207,48,74,0.1)' : 'rgba(3,166,109,0.1)'};
`
