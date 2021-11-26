import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Category = ({ categories: data }) => {
  const [categories, setCategories] = React.useState(data)
  return (
    <Wrapper>
      {categories.map(category => {
        const { id } = category
        const { name, image } = category.data
        console.log(getImage(image.localFiles[0]))

        return (
          <div className="category-info" key={id}>
            <GatsbyImage
              image={getImage(image.localFiles[0])}
              alt={name}
              className="img"
            />
            <p>{name}</p>
          </div>
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
      background-color: var(--clr-background);
      font-size: 0.6rem;
      font-weight: bold;
      text-transform: uppercase;
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
