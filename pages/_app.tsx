import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import { RecoilRoot } from 'recoil'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/globalstyles'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
