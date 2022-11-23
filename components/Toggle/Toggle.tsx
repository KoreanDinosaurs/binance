import React from 'react'

import SunIcon from 'public/image/sun.svg'
import MoonIcon from 'public/image/moon.svg'

import * as S from './Toggle.styled'

export default function Toggle() {
  const [mode, setMode] = React.useState<boolean>(false)
  const handleMode = React.useCallback(() => {
    setMode((prev) => !prev)
  }, [])

  return (
    <S.ToggleContainer onClick={handleMode}>
      <S.ToggleRound mode={mode}>
        {mode ? (
          <MoonIcon width={25} height={25} />
        ) : (
          <SunIcon width={25} height={25} />
        )}
      </S.ToggleRound>
    </S.ToggleContainer>
  )
}
