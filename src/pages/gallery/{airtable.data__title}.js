import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import LinkButton from "../../components/LinkButton"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CategoryTemplate = ({ data }) => {
  const { description, title, image } = data.airtable.data
  const { id } = data.airtable

  return (
    <Layout>
      <Wrapper>
        <article className="category-info">
          <h1>{title}</h1>
          <p>{description}</p>
          <LinkButton text="Wróć" to="/offer" icon="arrowLeft" />
        </article>
        <section className="img-wrapper">
          {image.localFiles.map((item, index) => {
            console.log(item)
            return (
              <div className={`div-${index}`}>
                <GatsbyImage
                  image={getImage(item)}
                  alt={title}
                  className="img"
                  key={index}
                />
              </div>
            )
          })}
        </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCategory($data__title: String) {
    airtable(data: { title: { eq: $data__title } }) {
      data {
        description
        title
        image {
          localFiles {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
      id
    }
  }
`
const Wrapper = styled.section`
  width: 95%;
  display: grid;
  max-width: var(--max-width);
  margin: 0 auto;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 1.7fr;
  }
  .category-info {
    display: flex;
    flex-direction: column;
    h1 {
      text-transform: capitalize;
      font-size: 4rem;
      border-bottom: var(--border-bottom);
      padding-bottom: 2rem;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
    }
    .btn {
      width: 5rem;
    }
  }
  .img-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    @media screen and (min-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .img {
      height: 100%;
      width: 100%;
      border-radius: 0.5rem;
    }

    .div-0 {
      grid-row: span 1.5;
      grid-column: span 1.5;
      @media screen and (min-width: 980px) {
        grid-row: span 2;
        grid-column: span 2;
      }
    }
  }
`
export default CategoryTemplate
