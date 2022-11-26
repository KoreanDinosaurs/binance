import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import MenuIcon from 'public/image/menu.svg'
import DropDown from 'components/ui/DropDown'
import Toggle from 'components/ui/Toggle'

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
        onClick={() => Router.push('/')}
      />
      <Navigation />
      <S.Block />
      <User />
      <Tool />
    </S.Header>
  )
}

const Navigation = () => {
  const { t } = useTranslation('drop')
  const { t: T } = useTranslation('header')
  const data = [
    {
      title: `${t('exchange')}`,
      content: `${t('exchangeInfo')}`,
    },
    {
      title: `${t('academy')}`,
      content: `${t('academyInfo')}`,
    },
    {
      title: `${t('link')}`,
      content: `${t('linkInfo')}`,
    },
    {
      title: `${t('institution')}`,
      content: `${t('institutionInfo')}`,
    },
    {
      title: `${t('learn')}`,
      content: `${t('learnInfo')}`,
    },
    {
      title: `${t('charity')}`,
      content: `${t('charityInfo')}`,
    },
    {
      title: `${t('cloud')}`,
      content: `${t('cloudInfo')}`,
    },
    {
      title: `${t('dex')}`,
      content: `${t('dexInfo')}`,
    },
    {
      title: `${t('labs')}`,
      content: `${t('labsInfo')}`,
    },
    {
      title: `${t('launchpad')}`,
      content: `${t('launchpadInfo')}`,
    },
    {
      title: `${t('research')}`,
      content: `${t('researchInfo')}`,
    },
    {
      title: `${t('wallet')}`,
      content: `${t('walletInfo')}`,
    },
    {
      title: `${t('gift')}`,
      content: `${t('giftInfo')}`,
    },
    {
      title: `${t('live')}`,
      content: `${t('liveInfo')}`,
    },
    {
      title: `${t('api')}`,
      content: `${t('apiInfo')}`,
    },
    {
      title: `${t('babt')}`,
      content: `${t('babtInfo')}`,
    },
  ]
  return (
    <S.Nav>
      <S.Nav__ul>
        <li>
          <DropDown category={data} column={3}>
            <MenuIcon width={20} height={20} />
          </DropDown>
        </li>
        <li>{T('buy')}</li>
        <li>{T('markets')}</li>
        <li>{T('trade')}</li>
        <li>{T('derivatives')}</li>
        <li>{T('earn')}</li>
        <li>{T('finance')}</li>
        <li>{T('nft')}</li>
        <li>{T('institutional')}</li>
        <li>{T('feed')}</li>
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
      <Toggle />
    </S.Tool__ul>
  )
}
