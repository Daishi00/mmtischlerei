//i18next-extract-mark-ns-start about-page

import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Title from "../components/Title"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GalleryImg from "../components/GalleryImg"
import { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { MdOutlineLoupe } from "react-icons/md"

const Gallery = ({ data }) => {
  const { nodes: gallery } = data.allAirtable
  const { t } = useTranslation()
  const { selectImage, handleSelectImage } = useContext(GatsbyContext)

  return (
    <>
      <Seo title={t("Galeria")} />
      <Layout data={data}>
        <Wrapper>
          <Title title="Nasze realizacje" />
          {selectImage === null ? null : (
            <GalleryImg dataSelected={selectImage} data={gallery} />
          )}
          <section className="gallery-container">
            {gallery.map(item => {
              const { title, image } = item.data
              const { id } = item

              return (
                <button
                  className="img-container"
                  key={id}
                  onClick={() => handleSelectImage(item)}
                >
                  <GatsbyImage
                    image={getImage(image.localFiles[0])}
                    alt={title}
                    className="img"
                    onClick={() => handleSelectImage(item)}
                  />
                  <div className="img-info ">
                    <MdOutlineLoupe size={64} />
                    <h4>{title}</h4>
                  </div>
                </button>
              )
            })}
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AllGallery($language: String) {
    allAirtable(
      filter: { table: { eq: "Gallery" } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          title
          date
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
const Wrapper = styled.section`
  display: grid;
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  place-items: center;
  grid-gap: 1rem;

  .gallery-container {
    width: 70%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;

    .img-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: grid;
      place-items: center;
      cursor: pointer;
      box-shadow: var(--dark-shadow);
      border: none;
      border-radius: 5px;

      .img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      &:hover .img {
        opacity: 0.3;
      }

      .img-info {
        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        opacity: 0;

        h4 {
          text-transform: capitalize;
        }
      }
      &:hover .img-info {
        opacity: 1;
      }
    }
  }
`

export default Gallery
