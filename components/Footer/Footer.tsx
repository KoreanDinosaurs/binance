import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return <FooterComponent>Legal High | 강동현</FooterComponent>
}

const FooterComponent = styled.footer`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 0.8rem;
  border-top: 1px solid var(--color-border);
`
