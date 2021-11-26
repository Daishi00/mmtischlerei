import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Category from "../components/Category"

const Offer = ({ data }) => {
  const {
    allAirtable: { nodes: categories },
  } = data

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
              Poza ofertą poniżej oferujemy szeroko pojęte usługi stolarskie.
              Zachęcamy do kontaktu telefonicznego.
            </h2>
          </div>
        </div>

        <Category categories={categories} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable {
      nodes {
        data {
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
        }
        id
      }
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: var(--max-width);
  place-items: center;
  margin: 0 auto 5rem auto;

  .img-container {
    position: relative;
    width: 100%;
    margin: 2rem;
    height: 15rem;
    border-bottom: solid 2px #b08968;
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
