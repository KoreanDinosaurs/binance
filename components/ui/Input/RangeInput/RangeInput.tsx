import React from 'react'

import * as S from './RangeInput.styled'

export default function RangeInput() {
  const [value, setValue] = React.useState<number>(50)
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value))
    },
    [],
  )

  return (
    <S.InputContainer>
      <S.Input
        onChange={handleChange}
        type="range"
        min="0"
        max="100"
        defaultValue={value}
        step="1"
      />
    </S.InputContainer>
  )
}
