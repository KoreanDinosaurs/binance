import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './Button.styled'

interface ButtonProps {
  mode: 'buy' | 'sell'
  coin: string
}

export default function Button({ mode, coin }: ButtonProps) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  return (
    <S.Button mode={mode}>
      {locale == 'ko'
        ? `${coin} ${t(mode)}`
        : `${t(mode.toLocaleUpperCase())} ${coin}`}
    </S.Button>
  )
}
