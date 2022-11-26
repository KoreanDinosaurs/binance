import React from 'react'

import Input from 'components/ui/Input'

import * as S from './OrderForm.styled'

export default function OrderForm() {
  return (
    <S.OrderForm>
      <Order />
      <Order />
    </S.OrderForm>
  )
}

const Order = () => {
  return (
    <S.Order>
      <Input leftLabel="Price" rightLabel="BUSD" />
      <Input leftLabel="Amount" rightLabel="BUSD" />
      <Input leftLabel="Total" rightLabel="BUSD" />
    </S.Order>
  )
}
