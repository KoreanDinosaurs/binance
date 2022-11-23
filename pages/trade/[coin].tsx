import React from 'react'

import Header from 'components/Header'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  }
}

export default function Coin() {
  return (
    <>
      <Header />
    </>
  )
}
