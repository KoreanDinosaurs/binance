import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > svg:nth-of-type(1) {
    position: absolute;
    fill: var(--color-gray-400);
    left: 7px;
  }

  > svg:nth-of-type(2) {
    position: absolute;
    fill: var(--color-gray-400);
    right: 7px;
  }
`

export const Search = styled.input`
  background: ${({ theme }) => theme.colors.inputColor};
  border: none;
  outline: none;
  padding: 0.3rem;
  padding-left: 1.5rem;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;

  &::placeholder {
    font-size: 12px;
    color: var(--color-gray-400);
  }
`

export const CancleBtn = styled.button`
  border: none;
  color: var(--color-yellow-100);
  font-size: 14px;
  margin-left: 0.4rem;
  background: transparent;
  cursor: pointer;
`
