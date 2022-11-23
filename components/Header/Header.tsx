import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import data from 'data.json'

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
  return (
    <S.Nav>
      <S.Nav__ul>
        <li>
          <DropDown category={data.menu.All} column={3}>
            <MenuIcon width={20} height={20} />
          </DropDown>
        </li>
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
    </S.Nav>
  )
}

const User = () => {
  return (
    <S.User__ul>
      <li>
        <Link href="/login">Log In</Link>
      </li>
      <li>Register</li>
    </S.User__ul>
  )
}

const Tool = () => {
  return (
    <S.Tool__ul>
      <li>Downloads</li>
      <li>English</li>
      <li>USD</li>
    </S.Tool__ul>
  )
}
