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

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: var(--color-gray-400);
  flex-grow: 1;
`

export const TableBodyItem = styled.div`
  display: flex;
  line-height: 24px;
  padding: 0 1rem;
  cursor: pointer;

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
  &:hover {
    background: var(--color-gray-70);
  }
`

export const ItemWithStar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`

export const EmptyItem = styled.div`
  font-size: 0.7rem;
  color: var(--color-gray-400);
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
