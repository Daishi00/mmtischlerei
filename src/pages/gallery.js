//i18next-extract-mark-ns-start about-page

import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Title from "../components/Title"
import Seo from "../components/Seo"
const Gallery = ({ data }) => {
  const { t } = useTranslation()

  return (
    <>
      <Seo title={t("Galeria")} />
      <Layout data={data}>
        <Wrapper>
          <Title title="Nasze realizacje" />
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
`

export default Gallery
