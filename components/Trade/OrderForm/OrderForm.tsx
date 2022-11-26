import React from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { orderPriceState, seedMoney } from 'recoil/OrderAtom'
import { useTranslation } from 'react-i18next'

import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import RangeInput from 'components/ui/Input/RangeInput'

import * as S from './OrderForm.styled'

export default function OrderForm() {
  return (
    <S.OrderForm>
      <Order mode="buy" />
      <Order mode="sell" />
    </S.OrderForm>
  )
}

const Order = ({ mode }: { mode: 'buy' | 'sell' }) => {
  const { t } = useTranslation('common')
  const seed = useRecoilValue(seedMoney)
  const orderPrice = useRecoilValue(orderPriceState)
  const router = useRouter()
  const { coin: coinName } = router.query
  const [coin, category] = (coinName as string).split('_')

  return (
    <S.Order>
      <S.OrderSeed>
        <span>{t('avbl')}</span>{' '}
        {mode == 'buy' ? seed[category] : seed[coin] ? seed[coin] : 0}{' '}
        <span>{mode == 'buy' ? category : coin}</span>
      </S.OrderSeed>
      <Input
        leftLabel={t('price')}
        rightLabel={category}
        value={orderPrice}
        mode="price"
      />
      <Input leftLabel={t('amount')} rightLabel={coin} mode="amount" />
      <RangeInput />
      <Input leftLabel={t('total')} rightLabel={category} mode="total" />
      <Button mode={mode} coin={coin} />
    </S.Order>
  )
}
