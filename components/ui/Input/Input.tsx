import React from 'react'

import * as S from './Input.styled'

interface InputProps {
  leftLabel: string
  rightLabel: string
}

export default function Input({ leftLabel, rightLabel }: InputProps) {
  return (
    <S.InputContainer>
      <div>{leftLabel}</div>
      <S.Input />
      <div>{rightLabel}</div>
    </S.InputContainer>
  )
}
