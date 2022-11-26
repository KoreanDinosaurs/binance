import React from 'react'

import OrderBookBubbler from 'components/ui/Bubbler/OrderBookBubbler'

import * as S from './OrderBookTable.styled'
import { useSetRecoilState } from 'recoil'
import { orderPriceState } from 'recoil/OrderAtom'

interface OrderBookTableProps {
  headData?: string[]
  data: string[][] | null
  mode: 'buy' | 'sell'
}

export default function OrderBookTable({
  headData,
  data,
  mode,
}: OrderBookTableProps) {
  const setOrderPrice = useSetRecoilState(orderPriceState)
  const [index, setIndex] = React.useState<number>(
    mode == 'buy' ? data!.length + 1 : 0,
  )
  const handleMouseOver = (idx: number) => {
    setIndex(idx + 1)
  }
  const handleMouseOut = () => {
    setIndex(mode == 'buy' ? data!.length + 1 : 0)
  }
  const handleClick = (price: number) => {
    setOrderPrice(price)
  }
  return (
    <S.Table>
      <S.TableHead>
        {headData && headData.map((val, idx) => <div key={idx}>{val}</div>)}
      </S.TableHead>
      <S.TableBody start={index} mode={mode}>
        {data &&
          data.map((val, idx) => (
            <S.TableBodyItem
              key={idx}
              mode={mode}
              onMouseOver={() => handleMouseOver(idx)}
              onMouseOut={handleMouseOut}
              onClick={() => handleClick(Number(val[0]))}
            >
              <div>{val[0]}</div>
              <div>{val[1]}</div>
              <div>{val[2]}</div>
              <S.ProgressBar
                mode={mode}
                percentage={(Number(val[2]) / 1000) * 100}
              />
              {index - 1 == idx && (
                <OrderBookBubbler
                  price={val[0]}
                  amount={val[1]}
                  total={val[2]}
                />
              )}
            </S.TableBodyItem>
          ))}
      </S.TableBody>
    </S.Table>
  )
}
