import styled from 'styled-components'

export const Header = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 0 1rem;
  font-size: 14px;
`

export const Block = styled.div`
  flex-grow: 1;
`

export const Nav = styled.nav`
  height: 100%;
  display: flex;
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
    svg:nth-of-type(1) {
      fill: var(--color-yellow-100);
    }
  }
`

export const User__ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  li:nth-of-type(1):hover {
    color: var(--color-yellow-100);
  }
  li:nth-of-type(2) {
    background-color: rgb(252, 213, 53);
    padding: 0.6rem 0.8rem;
    border-radius: 0.4rem;
  }
  li:nth-of-type(2):hover {
    background-color: rgb(252, 213, 53, 0.8);
  }
`

export const Tool__ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  li:hover {
    color: var(--color-yellow-100);
  }
`
