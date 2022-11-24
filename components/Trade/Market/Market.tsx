import React from 'react'

import Search from 'components/ui/Search'
import Table from 'components/ui/Table'
import StarIcon from 'public/image/star.svg'

import * as S from './Market.styled'

export default function Market() {
  const tabList = ['BUSD', 'USDT', 'BNB', 'BTC']

  return (
    <S.Market>
      <Search />
      <S.MarketTab>
        <StarIcon width={10} height={10} />
        {tabList.map((list, idx) => (
          <S.MarketTabItem key={idx}>{list}</S.MarketTabItem>
        ))}
      </S.MarketTab>
      <Table mode="like" />
    </S.Market>
  )
}
