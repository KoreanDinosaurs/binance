import React from 'react'

import StarIcon from 'public/image/star.svg'

import * as S from './Table.styled'

interface TableProps {
  headData?: string[]
  mode: 'plain' | 'like'
}

export default function Table({ mode }: TableProps) {
  const data = [
    ['BTC/BUSD', '0.539', '+0.56%'],
    ['BTC/BUSD', '0.539', '+0.56%'],
  ]
  return (
    <S.Table>
      <S.TableHead>
        {['Pair', 'Price', 'Change'].map((val, idx) => (
          <div key={idx}>{val}</div>
        ))}
      </S.TableHead>
      <S.TableBody>
        {mode === 'plain' ? (
          <PlainTableBodyItem data={data} />
        ) : (
          <LikeTableBodyItem data={data} />
        )}
      </S.TableBody>
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
            <div>{val[2]}</div>
          </S.TableBodyItem>
        ))}
    </>
  )
}

const LikeTableBodyItem = ({ data }: { data: string[][] }) => {
  return (
    <>
      {data &&
        data.map((val, idx) => (
          <S.TableBodyItem key={idx}>
            <S.ItemWithStar>
              <StarIcon width={10} height={10} />
              {val[0]}
            </S.ItemWithStar>
            <div>{val[1]}</div>
            <div>{val[2]}</div>
          </S.TableBodyItem>
        ))}
    </>
  )
}
