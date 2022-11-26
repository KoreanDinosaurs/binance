import React from 'react'
import { useRouter } from 'next/router'

import OrderBookTable from 'components/ui/Table/OrderBookTable'

import Data from 'data.json'

import * as S from './OrderBook.styled'

export default function OrderBook() {
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  const data = JSON.parse(JSON.stringify(Data))

  const sellData = data.trade[category][coin].orderBook.sell.map(
    (val: string[]) => [
      val[0],
      val[1],
      String((Number(val[0]) * Number(val[1])).toFixed(2)),
    ],
  )
  const buyData = data.trade[category][coin].orderBook.buy.map(
    (val: string[]) => [
      val[0],
      val[1],
      String((Number(val[0]) * Number(val[1])).toFixed(2)),
    ],
  )
  return (
    <S.OrderBook>
      <OrderBookTable
        data={sellData}
        headData={['Price', 'Amount', 'Total']}
        mode="buy"
      />
      <S.CoinPrice>
        <span>{data.trade[category][coin].price}</span>
        <span>${data.trade[category][coin].price}</span>
      </S.CoinPrice>
      <OrderBookTable data={buyData} mode="sell" />
    </S.OrderBook>
  )
}
