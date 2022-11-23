import styled from 'styled-components'

export const Header = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export const Block = styled.div`
  flex-grow: 1;
`

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  margin-left: 2rem;
`

export const Nav__ul = styled.ul`
  display: flex;
  gap: 1rem;

  li {
    margin: 0 0.2rem;
    display: flex;
    align-items: center;
  }

  li:hover {
    color: var(--color-yellow-100);
    svg {
      fill: var(--color-yellow-100);
    }
  }
`

export const User__ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Tool__ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`
