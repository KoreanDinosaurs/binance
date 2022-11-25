import React from 'react'
import styled from 'styled-components'

interface OrderBookBubblerProps {
  price: string
  amount: string
  total: string
}

export default function OrderBookBubbler({
  price,
  amount,
  total,
}: OrderBookBubblerProps) {
  return (
    <BubbleContainer>
      <Bubble>
        <BubbleContent>
          <div>Price:</div>
          <div>{price}</div>
        </BubbleContent>
        <BubbleContent>
          <div>Amount:</div>
          <div>{amount}</div>
        </BubbleContent>
        <BubbleContent>
          <div>Total:</div>
          <div>{total}</div>
        </BubbleContent>
      </Bubble>
    </BubbleContainer>
  )
}

const BubbleContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: 100%;
`

const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.2rem;
  width: 200px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.labelColor};
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 5px 5px 0;
    border-color: transparent ${({ theme }) => theme.colors.labelColor};
    display: block;
    width: 0;
    z-index: 1;
    left: -5px;
    top: 45%;
  }
`
const BubbleContent = styled.div`
  display: flex;
  justify-content: space-between;

  & div:nth-of-type(1) {
    font-size: 1rem;
    color: white;
  }
  & div:nth-of-type(2) {
    font-size: 0.8rem;
    margin-left: 0.4rem;
    color: white;
  }
`
