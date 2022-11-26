import React from 'react'

import Table from 'components/ui/Table'
import Data from 'data.json'
import * as S from './Trades.styled'
import { useRouter } from 'next/router'

export default function Trades() {
  const [tabIndex, setTabIndex] = React.useState<number>(0)
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  const data = JSON.parse(JSON.stringify(Data))
  const tradeData = tabIndex ? [] : data.trade[category][coin].marketTrade
  return (
    <S.Trades>
      <S.TradesTabs idx={tabIndex}>
        <S.Tab onClick={() => setTabIndex(0)}>Market Trades</S.Tab>
        <S.Tab onClick={() => setTabIndex(1)}>My Trades</S.Tab>
      </S.TradesTabs>
      <div style={{ paddingRight: '10px' }}>
        <Table
          headData={['Price(BUSD)', 'Amount(BTC)', 'Time']}
          data={tradeData}
          mode="plain"
        />
      </div>
    </S.Trades>
  )
}
