import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Header from "../components/Language"
const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <h4>Telefon (Deutsch, English, Polski):</h4>
        <p>+48 791 756 101 +48 503 586 040</p>
        <h4>E-mail:</h4>
        <p>mmtischlerei@gmail.com</p>
        <h4>Dane firmy:</h4>
        <p>M&M Tischlerei Andrzej Abramczyk i Jan Kowalski</p>
        <p>
          66-620 Gubin, Polska,
          <br />
          ul.Fajna 7
        </p>
        <p>NIP: 009299292902</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  display: grid;

  max-width: var(--max-width);
  margin: 0 auto;
`

export default Contact
