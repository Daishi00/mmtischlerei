import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import squareline from "../images/squareline.svg"
import styled from "styled-components"

const Hero = () => {
  return (
    <>
      <Background />
      <Wrapper>
        <div className="section-offer">
          <StaticImage
            src="../images/furniture.jpg"
            layout="constrained"
            placeholder="blurred"
            className="img"
            alt="kitchen"
          />
          <article className="offer-info">
            <img src={squareline} className="squareline top-right" />
            <img src={squareline} className="squareline bottom-left" />
            <h2>
              Produkcja mebli <br />
              na wymiar
            </h2>
            <ul>
              <li>Kuchnie</li>
              <li>Szafy wnękowe</li>
              <li>Garderoby</li>
              <li>Meble na poddasza i skosy</li>
              <li>Meble biurowe</li>
            </ul>
          </article>
        </div>
        <div className="section-offer reverse">
          <StaticImage
            src="../images/carpenter.jpg"
            layout="constrained"
            placeholder="blurred"
            className="img img-reverse"
            alt="carpenter"
          />
          <article className="offer-info">
            <img src={squareline} className="squareline top-right" />
            <img src={squareline} className="squareline bottom-left" />
            <h2>Usługi stolarskie</h2>
            <ul>
              <li>Toczenie</li>
              <li>Frezowanie</li>
              <li>Renowacja</li>
              <li>Potazacja</li>
              <li>Kamieniowanie</li>
            </ul>
          </article>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  margin: 3rem auto;
  max-width: var(--max-width);
  position: relative;

  .section-offer {
    grid-template-columns: 1fr;
    display: grid;
    grid-auto-flow: dense;
    justify-content: center;
    place-items: center;
    margin: 2rem;
    grid-gap: 3rem;
    @media screen and (min-width: 980px) {
      grid-template-columns: 2fr 1fr;
    }

    .img {
      margin: 0 auto;
      width: 90%;
      border-radius: 10px;
      grid-row: 2;
      filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
      @media screen and (min-width: 980px) {
        width: 100%;
        height: 30rem;
        grid-row: 1;
      }
    }

    .img-reverse {
      grid-column: 1;
      @media screen and (min-width: 980px) {
        grid-column: 2;
      }
    }

    .offer-info {
      width: 80%;
      display: flex;
      height: 100%;
      padding: 1.5rem;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      position: relative;
      @media screen and (min-width: 980px) {
        width: 100%;
      }
      .squareline {
        position: absolute;
        width: 15%;
      }
      .top-right {
        top: 0;
        right: 0;
      }
      .bottom-left {
        bottom: 0;
        left: 0;
        transform: rotate(180deg);
      }

      h2 {
        font-size: 1.5rem;
        @media screen and (min-width: 980px) {
          font-size: 2rem;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;

        li {
          font-size: 1rem;

          @media screen and (min-width: 980px) {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  .reverse {
    @media screen and (min-width: 980px) {
      grid-template-columns: 1fr 2fr;
      margin-top: 5rem;
    }
  }
`

const Background = styled.div`
  display: none;
  @media screen and (min-width: 980px) {
    display: block;
    position: fixed;
    margin: 0 auto;
    top: 0;
    right: 0;
    width: 40vw;
    background-color: var(--clr-background);
    height: 100vh;
    z-index: -1000;
  }
`

export default Hero
