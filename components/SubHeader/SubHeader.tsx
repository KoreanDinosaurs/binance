import React from 'react'

import Data from 'data.json'

import * as S from './SubHeader.styled'
import { useRouter } from 'next/router'

export default function SubHeader() {
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  const data = JSON.parse(JSON.stringify(Data))
  const detail = data.trade[category][coin]

  return (
    <S.SubHeader>
      <S.Coin>
        <h1>{`${coin}/${category}`}</h1>
      </S.Coin>
      <S.CoinInfoContainer>
        <S.CoinInfoItem>
          <div>price</div>
          <div>{detail.price}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>24h Change</div>
          <div>{`${detail.change} ${detail.changePercentage}`}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>24h High</div>
          <div>{detail.high}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>24h Low</div>
          <div>{detail.low}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>{`24h Volume(${coin})`}</div>
          <div>{detail.volume[0]}</div>
        </S.CoinInfoItem>
        <S.CoinInfoItem>
          <div>{`24h Volume(${category})`}</div>
          <div>{detail.volume[1]}</div>
        </S.CoinInfoItem>
      </S.CoinInfoContainer>
    </S.SubHeader>
  )
}
