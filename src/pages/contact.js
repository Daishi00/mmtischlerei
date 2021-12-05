//i18next-extract-mark-ns-start contact-page

import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import Title from "../components/Title"
import { motion } from "framer-motion"
const Contact = ({ data }) => {
  const { t } = useTranslation()
  return (
    <>
      <Seo title={t("Kontakt")} />
      <Layout data={data}>
        <Wrapper>
          <section className="contact-info">
            <Title title="Kontakt" />
            <h4>
              <Trans>Telefon (polski, niemiecki, angielski):</Trans>
            </h4>
            <p>+48 791 756 101 +48 503 586 040</p>
            <h4>E-mail:</h4>
            <p>mmtischlerei@gmail.com</p>
            <p>M&M Tischlerei Andrzej Abramczyk i Jan Kowalski</p>
            <p>
              66-620 Gubin, Polska,
              <br />
              ul.Fajna 7
            </p>
            <p>NIP: 009299292902</p>
          </section>
          <section>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mdobnvan"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">
                  <Trans>Twoje Imię</Trans>
                </label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="email">
                  <Trans>Telefon</Trans>
                </label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div className="form-row">
                <label htmlFor="message">
                  <Trans>Wiadomość</Trans>
                </label>
                <textarea name="message" id="message"></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn"
                whileHover={{
                  backgroundColor: "#7f5539",
                  transition: { duration: 0.2 },
                }}
              >
                <Trans>Wyślij</Trans>
              </motion.button>
            </form>
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "contact-page"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

const Wrapper = styled.section`
  display: grid;
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: 980px) {
    grid-template-columns: 2fr 1.5fr;
  }

  .contact-info {
  }
  .form {
    display: grid;
    background: var(--clr-background-brown);
    padding: 2rem;
    border-radius: 5px;
    width: 100%;
    box-shadow: var(--dark-shadow);

    .btn {
      background-color: var(--clr-primary-1);
      border: none;
      border-radius: 5px;
      font-size: 1.5rem;
      color: var(--clr-primary-1);
      cursor: pointer;
      color: #fff;
      letter-spacing: 0.1rem;
      height: 3rem;
    }
    label {
      display: block;
      margin-bottom: 0.3rem;
    }

    .form-row {
      width: 100%;
      margin-bottom: 1rem;
      input {
        font-size: 1.3rem;
      }

      input,
      textarea {
        background: var(--clr-grey-10);
        border-radius: 5px;
        width: 100%;
        height: 3rem;
        border: 1px solid var(--clr-grey-8);
        padding: 0.2rem 0.5rem;

        &:focus {
          outline: none;
          border: 2px solid var(--clr-primary-1);
        }
      }
      textarea {
        min-height: 8rem;
        max-height: 32rem;
        font-size: 1.1rem;
        resize: vertical;
      }
    }
  }
`

export default Contact
