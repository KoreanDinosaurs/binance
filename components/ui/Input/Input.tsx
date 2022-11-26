import React from 'react'
import { useSetRecoilState } from 'recoil'
import { orderPriceState } from 'recoil/OrderAtom'

import * as S from './Input.styled'

interface InputProps {
  leftLabel: string
  rightLabel: string
  value?: number
  mode: 'price' | 'amount' | 'total'
}

export default function Input({
  leftLabel,
  rightLabel,
  value,
  mode,
}: InputProps) {
  const setOrderPrice = useSetRecoilState(orderPriceState)
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const onlyNumber = value.replace(/[^0-9]/g, '')
    switch (mode) {
      case 'price':
        setOrderPrice(onlyNumber === '' ? 0 : Number(onlyNumber))
    }
  }
  return (
    <S.InputContainer>
      <div>{leftLabel}</div>
      <S.Input type="text" value={value} onChange={handelChange} />
      <div>{rightLabel}</div>
    </S.InputContainer>
  )
}
