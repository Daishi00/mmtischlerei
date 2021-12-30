import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Seo from "../components/Seo"
import { useTranslation } from "gatsby-plugin-react-i18next"

const IndexPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title="Home"
        description={t(
          "Stolarnia zlokalizowana w Gubinie oferująca meble na wymiar i usługi stolarskie. Najlepsza jakość materiałów i szybkość wykonania."
        )}
      />
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
