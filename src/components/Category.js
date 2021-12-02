import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import { motion } from "framer-motion"
import slugify from "slugify"
const Category = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map(category => {
        const { id } = category
        const { title, image } = category.data
        return (
          <Link
            to={`/offer/${slugify(title, {
              lower: true,
            })}`}
            key={id}
          >
            <motion.div
              className="category-info"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 1 }}
            >
              <GatsbyImage
                image={getImage(image.localFiles[0])}
                alt={title}
                className="img"
              />
              <div className="img-info">
                <p>
                  <Trans>{title}</Trans>
                </p>
              </div>
            </motion.div>
          </Link>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 75%;
  row-gap: 2rem;
  column-gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .category-info {
    cursor: pointer;
    width: 100%;
    display: grid;
    grid-template-rows: 5rem 1.5rem;
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));

    @media screen and (min-width: 660px) {
      grid-template-rows: 10rem 2rem;
    }

    .img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
    }

    .img-info {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      background: var(--clr-background-brown);
      border-radius: 0 0 5px 5px;

      p {
        font-size: 0.5rem;
        font-weight: bold;
        text-align: center;
        letter-spacing: 0.1rem;
        border-radius: 0 0 5px 5px;
        margin: 0;

        @media screen and (min-width: 660px) {
          font-size: 0.9rem;
        }
        @media screen and (min-width: 880px) {
          font-size: 1rem;
        }
      }
    }
  }
`

export default Category
