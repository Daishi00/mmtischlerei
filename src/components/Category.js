import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import { motion } from "framer-motion"
import slugify from "slugify"
const Category = ({ categories }) => {
  console.log(categories)

  return (
    <Wrapper>
      {categories.map(category => {
        const { id } = category
        const { title, image } = category.data

        return (
          <Link
            to={`/gallery/${slugify(title, {
              lower: true,
            })}`}
          >
            <motion.div
              className="category-info"
              key={id}
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
              <p>
                <Trans>{title}</Trans>
              </p>
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
  grid-gap: 2rem;
  row-gap: 5rem;
  width: 50%;

  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .category-info {
    width: 10rem;
    height: 6rem;
    cursor: pointer;

    @media screen and (min-width: 660px) {
      width: 18rem;
      height: 10rem;
      filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
    }

    .img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
    }
    p {
      display: grid;
      place-items: center;
      height: 2rem;
      background: var(--clr-background-brown);
      font-size: 0.6rem;
      font-weight: bold;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      border-radius: 0 0 5px 5px;
      margin: 0;

      @media screen and (min-width: 660px) {
        font-size: 1.2rem;
      }
    }
  }
`

export default Category
