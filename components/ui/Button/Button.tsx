import React from 'react'

import * as S from './Button.styled'

interface ButtonProps {
  mode: 'buy' | 'sell'
}

export default function Button({ mode }: ButtonProps) {
  return <S.Button mode={mode}>{mode.toLocaleUpperCase()}</S.Button>
}
