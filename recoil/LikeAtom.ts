import { atom, selector } from 'recoil'

export const likeCoin = atom<string[][]>({
  key: 'likeCoin',
  default: [],
})

export const filteredLikeCoin = selector({
  key: 'filteredLikeCoin',
  get: ({ get }) => {
    const list = get(likeCoin)
    return list.reduce((prev, curr) => [...prev, curr[0]], [])
  },
})
