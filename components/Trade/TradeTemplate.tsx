import React from 'react'
import { useRouter } from 'next/router'

import Chart from './Chart'
import Market from './Market'
import SubHeader from '@components/SubHeader'
import OrderBook from './OrderBook'
import OrderForm from './OrderForm'
import Trades from './Trades'
import Head from 'next/head'

import Data from 'data.json'

import * as S from './TradeTemplate.styled'
import { useSetRecoilState } from 'recoil'
import { orderPriceState } from 'recoil/OrderAtom'

export default function TradeTemplate() {
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  const data = JSON.parse(JSON.stringify(Data))
  const setPrice = useSetRecoilState(orderPriceState)

  React.useEffect(() => {
    setPrice(data.trade[category][coin].price)
  }, [setPrice, category, coin, data])

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
