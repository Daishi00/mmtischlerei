import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <p>M&M Tischlerei</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  background-color: var(--clr-primary-1);
  display: grid;
  place-items: center;
  margin-top: 2rem;

  p {
    margin: 0;
    font-weight: bold;
  }
`

export default Footer
