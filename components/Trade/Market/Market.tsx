import React from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { likeCoin } from 'recoil/LikeAtom'

import Search from 'components/ui/Search'
import Table from 'components/ui/Table'
import StarIcon from 'public/image/star.svg'

import Data from 'data.json'

import * as S from './Market.styled'

export default function Market() {
  const router = useRouter()
  const { coin: coinName } = router.query
  const [_, category] = (coinName as string).split('_')

  const [activeTab, setActiveTab] = React.useState<string>(category)

  const data = JSON.parse(JSON.stringify(Data))
  const likedCoin = useRecoilValue(likeCoin)
  const tabList = Object.keys(data.trade)
  const activeCoinData =
    data.trade[activeTab] && Object.keys(data.trade[activeTab])
  const tabData =
    activeCoinData &&
    Object.keys(data.trade[activeTab]).map((coin) => {
      const detail = data.trade[activeTab][coin]
      return [`${coin}/${activeTab}`, detail.price, detail.changePercentage]
    })

  const handleTab = React.useCallback((list: string) => {
    setActiveTab(list)
  }, [])

  return (
    <S.Market>
      <Search />
      <S.MarketTab>
        <StarIcon
          width={10}
          height={10}
          fill={activeTab == 'like' ? '#f0b90b' : '#707a8a'}
          onClick={() => handleTab('like')}
        />
        {tabList.map((list, idx) => (
          <S.MarketTabItem
            key={idx}
            select={list === activeTab}
            onClick={() => handleTab(list)}
          >
            {list}
          </S.MarketTabItem>
        ))}
      </S.MarketTab>
      <Table
        mode="like"
        headData={['Pair', 'Price', 'Chage']}
        data={activeTab == 'like' ? likedCoin : tabData}
      />
    </S.Market>
  )
}
