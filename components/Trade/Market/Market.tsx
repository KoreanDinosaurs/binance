import React from 'react'
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { searchState, searchValue } from 'recoil/SearchMode'
import { likeCoin } from 'recoil/LikeAtom'

import Search from 'components/ui/Search'
import Table from 'components/ui/Table'
import StarIcon from 'public/image/star.svg'

import Data from 'data.json'

import * as S from './Market.styled'
import { useTranslation } from 'react-i18next'

export default function Market() {
  const router = useRouter()
  const { coin: coinName } = router.query
  const [_, category] = (coinName as string).split('_')

  const [activeTab, setActiveTab] = React.useState<string>(category)
  const [searchMode, setSearchMode] = useRecoilState(searchState)
  const setSearchVal = useSetRecoilState(searchValue)

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

  const handleFocusOut = React.useCallback(() => {
    setSearchMode(false)
    setSearchVal('')
  }, [setSearchMode, setSearchVal])

  const { t } = useTranslation('common')

  return (
    <S.Market onBlur={handleFocusOut}>
      <div style={{ padding: '1rem 1rem 0' }}>
        <Search />
      </div>
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
        mode={searchMode ? 'search' : 'like'}
        headData={[`${t('pair')}`, `${t('price')}`, `${t('change')}`]}
        data={activeTab == 'like' ? likedCoin : tabData}
      />
    </S.Market>
  )
}
