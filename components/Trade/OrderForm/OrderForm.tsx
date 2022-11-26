import React from 'react'

import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import RangeInput from 'components/ui/Input/RangeInput'

import * as S from './OrderForm.styled'

export default function OrderForm() {
  return (
    <S.OrderForm>
      <Order mode="buy" />
      <Order mode="sell" />
    </S.OrderForm>
  )
}

const Order = ({ mode }: { mode: 'buy' | 'sell' }) => {
  return (
    <S.Order>
      <Input leftLabel="Price" rightLabel="BUSD" />
      <Input leftLabel="Amount" rightLabel="BUSD" />
      <RangeInput />
      <Input leftLabel="Total" rightLabel="BUSD" />
      <Button mode={mode} />
    </S.Order>
  )
}
