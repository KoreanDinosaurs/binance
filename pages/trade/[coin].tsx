import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  }
}

export default function Coin() {
  return <></>
}
