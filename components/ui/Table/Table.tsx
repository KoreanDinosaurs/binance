import React, { ReactNode } from 'react'
import Router from 'next/router'
import { searchValue } from 'recoil/SearchMode'
import { orderPriceState } from 'recoil/OrderAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredLikeCoin, likeCoin } from 'recoil/LikeAtom'

import StarIcon from 'public/image/star.svg'

import * as S from './Table.styled'

interface TableProps {
  headData?: string[]
  data: string[][] | null
  mode: 'plain' | 'like' | 'search'
}

export default function Table({ mode, data, headData }: TableProps) {
  return (
    <S.Table>
      <S.TableHead>
        {headData && headData.map((val, idx) => <div key={idx}>{val}</div>)}
      </S.TableHead>
      {data?.length ? (
        <S.TableBody>
          {mode === 'plain' ? (
            <PlainTableBodyItem data={data} />
          ) : mode === 'like' ? (
            <LikeTableBodyItem data={data} />
          ) : (
            <SearchTableBodyItem data={data} />
          )}
        </S.TableBody>
      ) : (
        <S.EmptyItem>조회된 내역이 없습니다.</S.EmptyItem>
      )}
    </S.Table>
  )
}

const handleRouter = (coin: string) => {
  const path = coin.replace('/', '_')
  Router.push(`/trade/${path}`)
}

const PlainTableBodyItem = ({ data }: { data: string[][] }) => {
  const setOrderPrice = useSetRecoilState(orderPriceState)
  const handleClick = (price: number) => {
    setOrderPrice(price)
  }
  return (
    <>
      {data &&
        data.map((val, idx) => (
          <S.TableBodyItem
            key={idx}
            onClick={() => handleClick(Number(val[0]))}
          >
            <div>{val[0]}</div>
            <div>{val[1]}</div>
            <div>{val[2]}</div>
          </S.TableBodyItem>
        ))}
    </>
  )
}

const LikeTableBodyItem = ({ data }: { data: string[][] }) => {
  const setLikeCoin = useSetRecoilState(likeCoin)
  const coinList = useRecoilValue(filteredLikeCoin)

  const handlePick = (val: string[]) => {
    setLikeCoin((prev) =>
      coinList.includes(val[0])
        ? prev.filter((item) => item[0] !== val[0])
        : [...prev, val],
    )
  }

  return (
    <>
      {data &&
        data.map((val, idx) => (
          <S.TableBodyItem key={idx} onClick={() => handleRouter(val[0])}>
            <S.ItemWithStar>
              <StarIcon
                width={10}
                height={10}
                fill={coinList.includes(val[0]) ? '#f0b90b' : '#707a8a'}
                onClick={(e: React.ChangeEvent<ReactNode>) => {
                  e.stopPropagation()
                  handlePick(val)
                }}
              />
              {val[0]}
            </S.ItemWithStar>
            <div>{val[1]}</div>
            <div style={{ color: val[2][0] == '+' ? '#0ecb81' : '#f6465d' }}>
              {val[2]}
            </div>
          </S.TableBodyItem>
        ))}
    </>
  )
}

const SearchTableBodyItem = ({ data }: { data: string[][] }) => {
  const search = useRecoilValue(searchValue)
  const filterdData = data.filter((val) =>
    val[0].includes(search.toLocaleUpperCase()),
  )
  return (
    <>
      {search &&
        filterdData &&
        filterdData.map((val, idx) => (
          <S.TableBodyItem key={idx} onMouseDown={() => handleRouter(val[0])}>
            <div>{val[0]}</div>
            <div>{val[1]}</div>
            <div style={{ color: val[2][0] == '+' ? '#0ecb81' : '#f6465d' }}>
              {val[2]}
            </div>
          </S.TableBodyItem>
        ))}
    </>
  )
}
