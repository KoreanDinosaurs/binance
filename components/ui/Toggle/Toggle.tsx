import React from 'react'

import SunIcon from 'public/image/sun.svg'
import MoonIcon from 'public/image/moon.svg'

import * as S from './Toggle.styled'
import { useRecoilState } from 'recoil'
import { themeState } from 'recoil/DarkMode'

export default function Toggle() {
  const [mode, setMode] = useRecoilState(themeState)

  const handleMode = React.useCallback(() => {
    setMode((prev) => !prev)
  }, [setMode])

  return (
    <S.ToggleContainer onClick={handleMode}>
      <S.ToggleRound themeMode={mode}>
        {mode ? (
          <MoonIcon width={25} height={25} />
        ) : (
          <SunIcon width={25} height={25} />
        )}
      </S.ToggleRound>
    </S.ToggleContainer>
  )
}
