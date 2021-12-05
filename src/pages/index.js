import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <Layout data={data}>
        <Hero data={data} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "home-page"] }
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

export default IndexPage
