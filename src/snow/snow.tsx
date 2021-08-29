import React from 'react'
import styled, { css, keyframes } from 'styled-components'

interface Props {
  left: number
  delay: number
}

const fall = keyframes`
  0% {
    top: 0;
    opacity: 0;
  }
  100% {
    top: 95%;
    opacity: 1;
  }
`

const swing = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(70px);
  }
  100% {
    transform: translateX(0px);
  }
`

const snowAnimation = (delay: number) =>
  css`
    ${swing} 2s infinite ease-in-out, ${fall} 5s infinite linear ${delay}s;
  `

const Snow = styled.div<{left: number, delay: number}>`
  position: absolute;
  color: white;
  opacity: 0;
  left: ${({ left }) => left}%;
  z-index: 1000;
  animation: ${({ delay }) => snowAnimation(delay)};
  &:after {
    content: "\\2744";
  }
`

export default ({ left, delay }: Props) => (
  <Snow left={left} delay={delay} />
)