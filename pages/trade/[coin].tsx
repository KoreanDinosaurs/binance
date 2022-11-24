import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import TradeTemplate from '@components/Trade/TradeTemplate'

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  }
}

export default function Trade() {
  return <TradeTemplate />
}
