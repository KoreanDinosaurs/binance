import React from 'react'
import Chart from './Chart'

import * as S from './TradeTemplate.styled'

export default function TradeTemplate() {
  return (
    <S.Trade>
      <div>left</div>
      <div>subheader</div>
      <div>market</div>
      <div>orderbook</div>
      <Chart />
      <div>trades</div>
      <div>orderform</div>
      <div>marketActivity</div>
      <div>basictable</div>
      <div>right</div>
    </S.Trade>
  )
}
