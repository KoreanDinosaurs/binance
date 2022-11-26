import React from 'react'

import Chart from './Chart'
import Market from './Market'
import SubHeader from '@components/SubHeader'
import OrderBook from './OrderBook'
import OrderForm from './OrderForm'
import Trades from './Trades'

import Head from 'next/head'

import * as S from './TradeTemplate.styled'
import { useRouter } from 'next/router'

export default function TradeTemplate() {
  const router = useRouter()
  const { coin } = router.query
  return (
    <S.Trade>
      <Head>
        <title>Legal High | {coin}</title>
      </Head>
      <S.Left />
      <SubHeader />
      <Market />
      <OrderBook />
      <Chart />
      <OrderForm />
      <Trades />
      <S.Right />
    </S.Trade>
  )
}
