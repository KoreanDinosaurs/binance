import styled from 'styled-components'

export const Button = styled.button<{ mode: string }>`
  display: flex;
  background: ${({ mode }) =>
    mode == 'buy' ? 'var(--color-green-100)' : 'var(--color-red-100)'};
  border-radius: 0.2rem;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  color: white;
  font-weight: 600;
`
