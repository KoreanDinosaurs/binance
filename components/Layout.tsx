import React, { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { themeState } from 'recoil/DarkMode'

import Header from './Header'

import { ThemeProvider } from 'styled-components'
import { Darktheme, Lighttheme } from 'styles/theme'

export default function Layout({ children }: { children: ReactNode }) {
  const theme = useRecoilValue(themeState)

  return (
    <>
      <ThemeProvider theme={theme ? Lighttheme : Darktheme}>
        <Header />
        {children}
      </ThemeProvider>
    </>
  )
}
