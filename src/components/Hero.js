import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import squareline from "../images/squareline.svg"
import styled from "styled-components"
import LinkButton from "./LinkButton"
import { Trans } from "gatsby-plugin-react-i18next"

const Hero = lang => {
  return (
    <>
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
            <img
              src={squareline}
              className="squareline top-right"
              alt="squareline"
            />
            <img
              src={squareline}
              className="squareline bottom-left"
              alt="squareline"
            />
            <h1>
              <Trans>Produkcja mebli na wymiar</Trans>
            </h1>
            <ul>
              <li>
                <Trans>Meble kuchenne</Trans>
              </li>

              <li>
                <Trans>Meble na poddasza i skosy</Trans>
              </li>
              <li>
                <Trans>Meble łazienkowe</Trans>
              </li>
              <li>
                <Trans>Meble biurowe</Trans>
              </li>
              <li>
                <Trans>Szafy wnękowe</Trans>
              </li>
              <li>
                <Trans>Garderoby</Trans>
              </li>
            </ul>
            <LinkButton text="Zobacz więcej" to="/offer" lang={lang} />
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
            <img
              src={squareline}
              className="squareline top-right"
              alt="squareline"
            />
            <img
              src={squareline}
              className="squareline bottom-left"
              alt="squareline"
            />
            <h1>
              <Trans>Usługi stolarskie</Trans>
            </h1>
            <ul>
              <li>
                <Trans>Toczenie</Trans>
              </li>
              <li>
                <Trans>Frezowanie</Trans>
              </li>
              <li>
                <Trans>Renowacja</Trans>
              </li>
              <li>
                <Trans>Lakierowanie</Trans>
              </li>
              <li>
                <Trans> Montaże rozwiązań stolarskich</Trans>
              </li>
            </ul>
            <LinkButton text="Zobacz więcej" to="/offer" lang={lang} />
          </article>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  margin: 2rem auto;
  max-width: var(--max-width);
  width: 95%;
  position: relative;
  display: grid;
  grid-gap: 2rem;

  .section-offer {
    grid-template-columns: 1fr;
    display: grid;
    grid-auto-flow: dense;
    justify-content: center;
    place-items: center;
    grid-gap: 2rem;
    @media screen and (min-width: 980px) {
      grid-template-columns: 2fr 1fr;
    }

    .img {
      margin: 0 auto;
      width: 100%;
      border-radius: var(--border-radius);
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
      width: 100%;
      display: flex;
      height: 100%;
      padding: 1.5rem;
      gap: 1rem;
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

      h1 {
        display: inline;
        font-size: 1.5rem;
        margin: 0;
        padding-bottom: 1rem;
        border-bottom: var(--border-bottom);

        @media screen and (min-width: 980px) {
          font-size: 2rem;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;

        li {
          font-size: 1.4rem;
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

export default Hero
