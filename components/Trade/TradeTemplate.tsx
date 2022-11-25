import React from 'react'

import Chart from './Chart'
import Market from './Market'
import SubHeader from '@components/SubHeader'
import OrderBook from './OrderBook'
import OrderForm from './OrderForm'
import Trades from './Trades'

import * as S from './TradeTemplate.styled'
import MarketActivity from './MarketActivity'
import BasicTable from './BasicTable'

export default function TradeTemplate() {
  return (
    <S.Trade>
      <S.Left />
      <SubHeader />
      <Market />
      <OrderBook />
      <Chart />
      <OrderForm />
      <Trades />
      <MarketActivity />
      <BasicTable />
      <S.Right />
    </S.Trade>
  )
}
