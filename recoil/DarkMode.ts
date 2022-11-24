import { atom } from 'recoil'

export const themeState = atom<boolean>({
  key: 'themeMode',
  default: false,
})
