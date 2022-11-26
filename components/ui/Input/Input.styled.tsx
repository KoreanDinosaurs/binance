import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.inputColor};
  border: 1px solid transparent;
  border-radius: 0.2rem;
  height: 40px;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
    min-width: 50px;
    line-height: 38px;
    flex-shrink: 0;
    height: 100%;
    font-size: 13px;
  }
  & div:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.subColor};
    padding-left: 8px;
    justify-content: flex-start;
  }
  & div:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.textColor};
    padding-right: 8px;
    justify-content: flex-end;
  }
  & input {
    flex: 1 1 0;
    color: ${({ theme }) => theme.colors.textColor};
  }
  &:hover {
    border: 1px solid var(--color-yellow-100);
  }
`

export const Input = styled.input`
  text-align: right;
  border: none;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.inputColor};
  outline: none;
`
