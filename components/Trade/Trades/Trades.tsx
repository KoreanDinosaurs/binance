import React from 'react'

import Table from 'components/ui/Table'
import Data from 'data.json'
import * as S from './Trades.styled'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function Trades() {
  const [tabIndex, setTabIndex] = React.useState<number>(0)
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  const data = JSON.parse(JSON.stringify(Data))
  const tradeData = tabIndex ? [] : data.trade[category][coin].marketTrade

  const { t } = useTranslation('common')

  return (
    <S.Trades>
      <S.TradesTabs idx={tabIndex}>
        <S.Tab onClick={() => setTabIndex(0)}>{t('marketTrades')}</S.Tab>
        <S.Tab onClick={() => setTabIndex(1)}>{t('myTrades')}</S.Tab>
      </S.TradesTabs>
      <div style={{ paddingRight: '10px' }}>
        <Table
          headData={[
            `${t('price')}(${category})`,
            `${t('amount')}(${coin})`,
            `${t('time')}`,
          ]}
          data={tradeData}
          mode="plain"
        />
      </div>
    </S.Trades>
  )
}
