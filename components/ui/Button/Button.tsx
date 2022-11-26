import React from 'react'

import * as S from './Button.styled'

interface ButtonProps {
  mode: 'buy' | 'sell'
  coin: string
}

export default function Button({ mode, coin }: ButtonProps) {
  return (
    <S.Button mode={mode}>
      {mode.toLocaleUpperCase()} {coin}
    </S.Button>
  )
}
