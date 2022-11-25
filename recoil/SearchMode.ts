import { atom } from 'recoil'

export const searchState = atom<boolean>({
  key: 'searchMode',
  default: false,
})

export const searchValue = atom<string>({
  key: 'searchValue',
  default: '',
})
