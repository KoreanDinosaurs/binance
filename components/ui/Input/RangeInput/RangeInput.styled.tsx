import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    overflow: hidden;
    width: 100%;
    border-radius: 25px;
    -webkit-appearance: none;
    background-color: #f2f2f2;
    cursor: grab;

    &::-webkit-slider-runnable-track {
      height: 20px;
      -webkit-appearance: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 4px solid #1c1d1d;
      background: white;
      ${({ theme }) =>
        `box-shadow: -200px 0 0 190px ${theme.colors.progressColor};`}
    }
  }

  &::-moz-range-progress {
    ${({ theme }) => `background-color: ${theme.colors.progressColor};`}
  }
  &::-moz-range-track {
    background-color: #f2f2f2;
  }
`
