import React from 'react'
import Router from 'next/router'

export default function Home() {
  React.useEffect(() => {
    Router.push('trade/BTC_BUSD')
  }, [])
}
