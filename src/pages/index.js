import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Hero"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero lang={data} />
    </Layout>
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

export default IndexPage
