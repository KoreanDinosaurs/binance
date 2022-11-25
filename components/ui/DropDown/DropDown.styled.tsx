import styled from 'styled-components'

export const Container = styled.div<{ focus: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 100;
  > svg {
    ${({ focus }) => focus && 'transform: rotate(180deg)'};
    fill: ${({ theme }) => theme.colors.subColor};
  }
`

export const DropContainer = styled.div<{ column: number }>`
  background-color: ${({ theme }) => theme.colors.subBgColor};
  display: grid;
  ${({ column }) => column && `grid-template-columns: repeat(${column}, 1fr)`};
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  top: 64px;
`

export const DropItem = styled.div`
  padding: 1rem;
  border-radius: 0.4rem;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    display: none;
    fill: var(--color-gray-400);
  }
  h3 {
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 0.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.subColor};
    font-size: 12px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.bgColor};
    svg {
      display: block;
      fill: var(--color-yellow-100);
    }
  }
`
