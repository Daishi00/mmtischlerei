import React from "react"
import styled from "styled-components"
import Social from "./Social"
const Footer = () => {
  return (
    <Wrapper>
      <Social />
      <p> © {new Date().getFullYear()} M&M Tischlerei</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 8rem;
  background-color: var(--clr-primary-1);
  display: grid;
  margin-top: 2rem;
  place-items: center;

  p {
    margin: 0;
    letter-spacing: 0.2rem;
    color: var(--clr-background-brown);
  }
`

export default Footer
