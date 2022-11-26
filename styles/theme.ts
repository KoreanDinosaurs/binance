import { DefaultTheme } from 'styled-components'

const Darktheme: DefaultTheme = {
  colors: {
    textColor: '#111',
    subColor: '#707a8a',
    bgColor: '#fafafa',
    subBgColor: 'white',
    inputColor: '#e6e8ea',
    labelColor: '#252930',
    progressColor: '#b7bdc6',
  },
}

const Lighttheme: DefaultTheme = {
  colors: {
    textColor: 'white',
    subColor: '#707a8a',
    bgColor: '#14151a',
    subBgColor: '#252930',
    inputColor: '#252930',
    labelColor: '#707a8a',
    progressColor: '#474d5c',
  },
}

export { Darktheme, Lighttheme }
