import React from 'react'
import Chart from './Chart'
import Market from './Market'

import * as S from './TradeTemplate.styled'

export default function TradeTemplate() {
  return (
    <S.Trade>
      <div>left</div>
      <div>subheader</div>
      <Market />
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
