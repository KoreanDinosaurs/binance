import React from 'react'

import SearchIcon from 'public/image/search-icon.svg'
import CancleIcon from 'public/image/cross-icon.svg'

import * as S from './Search.styled'
import { useRecoilState } from 'recoil'
import { searchState, searchValue } from 'recoil/SearchMode'

export default function Search() {
  const [searchMode, setSearchMode] = useRecoilState(searchState)
  const [searchVal, setSearchVal] = useRecoilState(searchValue)
  const $input = React.useRef<HTMLInputElement>(null)

  const handleFocus = React.useCallback(() => {
    setSearchMode(true)
  }, [setSearchMode])

  const handleDelete = React.useCallback(() => {
    setSearchMode(false)
    setSearchVal('')
  }, [setSearchMode, setSearchVal])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value)
  }

  return (
    <S.SearchContainer>
      <SearchIcon width={13} height={13} />
      {searchVal && (
        <CancleIcon width={10} height={10} onClick={handleDelete} />
      )}
      <S.Search
        type="text"
        name="search"
        aria-label="Search"
        placeholder="Search"
        autoComplete="off"
        value={searchVal}
        onChange={handleChange}
        onFocus={handleFocus}
        ref={$input}
      />
      {searchMode && !searchVal && <S.CancleBtn>Cancle</S.CancleBtn>}
    </S.SearchContainer>
  )
}
