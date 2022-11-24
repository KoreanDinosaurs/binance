import React from 'react'

import SearchIcon from 'public/image/search-icon.svg'

import * as S from './Search.styled'

export default function Search() {
  return (
    <S.SearchContainer>
      <SearchIcon width={13} height={13} />
      <S.Search
        type="text"
        name="search"
        aria-label="Search"
        placeholder="Search"
      />
    </S.SearchContainer>
  )
}
