import { atom, selector } from 'recoil'

interface SeedProps {
  [key: string]: number
}

export const seedMoney = atom<SeedProps>({
  key: 'seedMoney',
  default: { BUSD: 500 },
})

export const holdingCoin = atom<[]>({
  key: 'holdingCoin',
  default: [],
})

export const orderPriceState = atom<number>({
  key: 'orderPrice',
  default: 0,
})

export const orderAmountState = atom<number>({
  key: 'orderAmount',
  default: 50,
})

export const orderTotalState = selector({
  key: 'orderTotal',
  get: ({ get }) => {
    const price = get(orderPriceState)
    const amount = get(orderAmountState)
    return price * amount
  },
})
