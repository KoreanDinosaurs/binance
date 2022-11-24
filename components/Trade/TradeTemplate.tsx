import React from 'react'

import Chart from './Chart'
import Market from './Market'
import SubHeader from '@components/SubHeader'

import * as S from './TradeTemplate.styled'

export default function TradeTemplate() {
  return (
    <S.Trade>
      <div></div>
      <SubHeader />
      <Market />
      <div>orderbook</div>
      <Chart />
      <div>trades</div>
      <div>orderform</div>
      <div>marketActivity</div>
      <div>basictable</div>
      <div></div>
    </S.Trade>
  )
}
