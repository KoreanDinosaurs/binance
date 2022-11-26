import React, { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { themeState } from 'recoil/DarkMode'

import Header from './Header'

import styled, { ThemeProvider } from 'styled-components'
import { Darktheme, Lighttheme } from 'styles/theme'
import Footer from './Footer/Footer'

export default function Layout({ children }: { children: ReactNode }) {
  const theme = useRecoilValue(themeState)

  return (
    <>
      <ThemeProvider theme={theme ? Lighttheme : Darktheme}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 40px;
`
