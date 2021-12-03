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
            to={`/offer/${slugify(title, {
              lower: true,
            })}`}
            key={id}
          >
            <motion.div
              className="category-container"
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
  width: 70%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  grid-auto-rows: 110px;
  grid-auto-flow: dense;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 150px;
  }

  @media screen and (min-width: 620px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
  }

  @media screen and (min-width: 920px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 250px;
  }

  .category-container {
    width: 100%;
    height: 100%;
    display: grid;
    cursor: pointer;
    box-shadow: var(--dark-shadow);
    border: none;
    border-radius: 5px;
    grid-template-rows: 90% 13%;

    .img {
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: 100%;
    }

    .img-info {
      display: grid;
      place-items: center;
      height: auto;
      background: var(--clr-background-brown);
      border-radius: 0 0 5px 5px;

      p {
        font-size: 0.5rem;
        font-weight: bold;
        text-align: center;
        letter-spacing: 0.05rem;
        border-radius: 0 0 5px 5px;
        margin: 0;
        @media screen and (min-width: 480px) {
          font-size: 0.7rem;
        }
        @media screen and (min-width: 620px) {
          font-size: 0.9rem;
        }
        @media screen and (min-width: 920px) {
          font-size: 1.1rem;
        }
      }
    }
  }
`

export default Category
