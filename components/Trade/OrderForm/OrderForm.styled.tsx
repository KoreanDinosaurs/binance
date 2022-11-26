import styled from 'styled-components'

export const OrderForm = styled.section`
  grid-area: orderform;
  display: flex;
  width: 100%;
  padding: 1rem 0rem;
  align-items: center;
`

export const Order = styled.div`
  display: flex;
  padding: 0 1rem;
  gap: 1rem;
  width: 100%;
  flex-direction: column;
`

export const OrderSeed = styled.div`
  font-size: 0.7rem;
  & > span:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.subColor};
  }
  & > span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 600;
  }
`
