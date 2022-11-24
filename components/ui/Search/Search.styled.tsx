import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    fill: var(--color-gray-400);
    left: 7px;
  }
`

export const Search = styled.input`
  background: var(--color-gray-70);
  border: none;
  outline: none;
  padding: 0.3rem;
  padding-left: 1.5rem;
  border-radius: 0.3rem;
  color: black;
  width: 100%;

  &::placeholder {
    color: var(--color-gray-400);
  }
`
