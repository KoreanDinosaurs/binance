import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import Data from 'data.json'

import * as S from './SubHeader.styled'

export default function SubHeader() {
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  const data = JSON.parse(JSON.stringify(Data))
  const detail = data.trade[category][coin]

  const { t } = useTranslation('subHeader')

  return (
    <S.SubHeader>
      <S.Coin>
        <h1>{`${coin}/${category}`}</h1>
      </S.Coin>
      <S.CoinInfoContainer>
        <S.CoinInfoItem>
          <div>{t('price')}</div>
          <div>{detail.price}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>{t('change')}</div>
          <div>{`${detail.change} ${detail.changePercentage}`}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>{t('high')}</div>
          <div>{detail.high}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>{t('low')}</div>
          <div>{detail.low}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>
            {t('volume1')}
            {`(${coin})`}
          </div>
          <div>{detail.volume[0]}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>
            {t('volume1')}
            {`(${category})`}
          </div>
          <div>{detail.volume[1]}</div>
        </S.CoinInfoItem>
      </S.CoinInfoContainer>
    </S.SubHeader>
  )
}
