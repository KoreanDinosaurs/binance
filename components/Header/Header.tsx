import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import data from 'data.json'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import MenuIcon from 'public/image/menu.svg'
import DropDown from 'components/DropDown/DropDown'

import * as S from './Header.styled'

export default function Header() {
  return (
    <S.Header>
      <Image
        src="/image/logo.svg"
        width={120}
        height={24}
        alt="바이낸스 로고"
        priority
      />
      <Navigation />
      <S.Block />
      <User />
      <Tool />
    </S.Header>
  )
}

const Navigation = () => {
  const { t } = useTranslation('header')

  return (
    <S.Nav>
      <S.Nav__ul>
        <li>
          <DropDown category={data.menu.All} column={3}>
            <MenuIcon width={20} height={20} />
          </DropDown>
        </li>
        <li>{t('buy')}</li>
        <li>{t('markets')}</li>
        <li>{t('trade')}</li>
        <li>{t('derivatives')}</li>
        <li>{t('earn')}</li>
        <li>{t('finance')}</li>
        <li>{t('nft')}</li>
        <li>{t('institutional')}</li>
        <li>{t('feed')}</li>
      </S.Nav__ul>
    </S.Nav>
  )
}

const User = () => {
  const { t } = useTranslation('header')

  return (
    <S.User__ul>
      <li>
        <Link href="/login">{t('login')}</Link>
      </li>
      <li>{t('signup')}</li>
    </S.User__ul>
  )
}

const Tool = () => {
  const { t } = useTranslation('header')
  const router = useRouter()
  const { locale } = router

  const handleLang = () => {
    if (locale == 'ko') {
      return router.push('BTC_BUSD', 'BTC_BUSD', { locale: 'en' })
    } else {
      return router.push('BTC_BUSD', 'BTC_BUSD', { locale: 'ko' })
    }
  }

  return (
    <S.Tool__ul>
      <li>{t('download')}</li>
      <li onClick={handleLang}>{t('lang')}</li>
      <li>{t('currency')}</li>
    </S.Tool__ul>
  )
}
