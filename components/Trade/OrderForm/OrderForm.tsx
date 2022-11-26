import React from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { orderPriceState, seedMoney } from 'recoil/OrderAtom'

import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import RangeInput from 'components/ui/Input/RangeInput'

import * as S from './OrderForm.styled'

export default function OrderForm() {
  const router = useRouter()

  return (
    <S.OrderForm>
      <Order mode="buy" />
      <Order mode="sell" />
    </S.OrderForm>
  )
}

const Order = ({ mode }: { mode: 'buy' | 'sell' }) => {
  const seed = useRecoilValue(seedMoney)
  const orderPrice = useRecoilValue(orderPriceState)
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  return (
    <S.Order>
      <S.OrderSeed>
        <span>Avbl</span>{' '}
        {mode == 'buy' ? seed[category] : seed[coin] ? seed[coin] : 0}{' '}
        <span>{mode == 'buy' ? category : coin}</span>
      </S.OrderSeed>
      <Input
        leftLabel="Price"
        rightLabel={category}
        value={orderPrice}
        mode="price"
      />
      <Input leftLabel="Amount" rightLabel={coin} mode="amount" />
      <RangeInput />
      <Input leftLabel="Total" rightLabel={category} mode="total" />
      <Button mode={mode} coin={coin} />
    </S.Order>
  )
}
