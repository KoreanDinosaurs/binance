import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { RecoilRoot } from 'recoil'

import Layout from '@components/Layout'

import GlobalStyle from 'styles/globalstyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
