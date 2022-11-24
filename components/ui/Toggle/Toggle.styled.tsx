import styled, { css } from 'styled-components'

export const ToggleContainer = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 1rem;
  background: var(--color-gray-200);
  display: flex;
  align-items: center;
  padding: 0 5px;
  position: relative;
`

export const ToggleRound = styled.div<{ themeMode: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 1rem;
  background: white;
  display: flex;
  align-items: center;
  position: absolute;
  transition: all 0.5s ease;
  ${({ themeMode }) =>
    themeMode &&
    css`
      transform: translateX(26px) rotate(360deg);
    `}
`
