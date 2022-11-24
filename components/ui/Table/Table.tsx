import React from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredLikeCoin, likeCoin } from 'recoil/LikeAtom'

import StarIcon from 'public/image/star.svg'

import * as S from './Table.styled'

interface TableProps {
  headData?: string[]
  data: string[][] | null
  mode: 'plain' | 'like'
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
          ) : (
            <LikeTableBodyItem data={data} />
          )}
        </S.TableBody>
      ) : (
        <S.EmptyItem>조회된 내역이 없습니다.</S.EmptyItem>
      )}
    </S.Table>
  )
}

const PlainTableBodyItem = ({ data }: { data: string[][] }) => {
  return (
    <>
      {data &&
        data.map((val, idx) => (
          <S.TableBodyItem key={idx}>
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
          <S.TableBodyItem key={idx}>
            <S.ItemWithStar>
              <StarIcon
                width={10}
                height={10}
                fill={coinList.includes(val[0]) ? '#f0b90b' : '#707a8a'}
                onClick={() => handlePick(val)}
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
