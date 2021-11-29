import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "gatsby-plugin-react-i18next"
import Category from "../components/Category"

const Offer = ({ data }) => {
  const {
    allAirtable: { nodes: categories },
  } = data

  // const {locales:{locales}} = lang

  return (
    <Layout>
      <Wrapper>
        <div className="img-container">
          <StaticImage
            src="../images/tools.jpg"
            layout="constrained"
            placeholder="traced-svg"
            className="img"
            alt="tools"
          />
          <div className="offer-info">
            <h2>
              <Trans>
                Poza ofertą poniżej oferujemy szeroko pojęte usługi stolarskie.
                Zachęcamy do kontaktu telefonicznego.
              </Trans>
            </h2>
          </div>
        </div>
        <Category categories={categories} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query allOffers($language: String) {
    allAirtable {
      nodes {
        data {
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
        id
      }
    }
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: var(--max-width);
  place-items: center;
  align-items: center;
  margin: 0 auto 5rem auto;

  .img-container {
    position: relative;
    width: 95%;
    margin: 0 2rem 2rem 2rem;
    height: 20rem;
    border-bottom: var(--border-bottom);
    .img {
      width: 100%;
      height: 90%;
      border-radius: 0.5rem;
      opacity: 0.3;
    }
    .offer-info {
      position: absolute;
      border-radius: 1rem;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      padding: 2rem;

      h2 {
        text-align: center;
        font-size: 1.2rem;
        line-height: 2rem;
        @media screen and (min-width: 980px) {
          font-size: 2.5rem;
          line-height: 4rem;
        }
      }
    }
  }
`

export default Offer
