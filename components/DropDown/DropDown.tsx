import React, { ReactNode } from 'react'

import Caret from 'public/image/caret.svg'
import Arrow from 'public/image/arrow.svg'

import * as S from './DropDown.styled'

interface DropDownProps {
  children: ReactNode
  column?: number
  category: { title: string; content: string }[]
}

export default function DropDown({
  children,
  category,
  column = 1,
}: DropDownProps) {
  const [focus, setFocus] = React.useState<boolean>(false)
  const $focusItem = React.useRef<HTMLDivElement>(null)

  const handleFocus = React.useCallback(() => {
    setFocus((prev) => !prev)
  }, [])

  React.useEffect(() => {
    if ($focusItem.current == null) return
    $focusItem.current.addEventListener('mouseenter', handleFocus)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      $focusItem.current?.removeEventListener('mouseenter', handleFocus)
    }
  }, [handleFocus])

  React.useEffect(() => {
    if ($focusItem.current == null) return
    $focusItem.current.addEventListener('mouseleave', handleFocus)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      $focusItem.current?.removeEventListener('mouseleave', handleFocus)
    }
  }, [handleFocus])

  return (
    <S.Container ref={$focusItem} focus={focus}>
      {children}
      <Caret width={15} height={15} />
      {focus && (
        <S.DropContainer column={column}>
          {category.map((item, idx) => (
            <S.DropItem key={idx}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
              <Arrow width={15} height={15} />
            </S.DropItem>
          ))}
        </S.DropContainer>
      )}
    </S.Container>
  )
}
