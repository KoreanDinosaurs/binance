import React from 'react'
import Image from 'next/image'

import * as S from './Header.styled'
import Link from 'next/link'

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
  return (
    <nav>
      <S.Nav__ul>
        <li>Buy Crypto</li>
        <li>Markets</li>
        <li>Trade</li>
        <li>Derivatives</li>
        <li>Earn</li>
        <li>Finance</li>
        <li>NFT</li>
        <li>Institutional</li>
        <li>Feed</li>
      </S.Nav__ul>
    </nav>
  )
}

const User = () => {
  return (
    <S.User__ul>
      <li>
        <Link href={'#'}>Log In</Link>
      </li>
      <li>
        <Link href={'#'}>Register</Link>
      </li>
    </S.User__ul>
  )
}

const Tool = () => {
  return (
    <S.Tool__ul>
      <li>Downloads</li>
      <li>English</li>
      <li>|</li>
      <li>USD</li>
    </S.Tool__ul>
  )
}
