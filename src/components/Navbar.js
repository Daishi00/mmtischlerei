import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
import lang from "../images/lang.svg"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-header">
        <StaticImage
          src="../images/logo.jpg"
          width={75}
          height={75}
          alt="logo"
        />
        <div className="nav-contact">
          <div className="nav-contact-option">
            <BsFillTelephoneFill size={24} />
            <p>+48 791 756 101</p>
            <p>+48 503 586 040</p>
          </div>
          <div className="nav-contact-option">
            <BsFillEnvelopeFill size={24} />
            <p>mmtischlerei@gmail.com</p>
          </div>
        </div>
      </div>
      <AiOutlineMenu className="burger" />
      <div className="nav-links">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/offer" className="btn">
          Oferta
        </Link>
        <Link to="/gallery" className="btn">
          Galeria
        </Link>
        <Link to="/contact" className="btn">
          Kontakt
        </Link>
        <img src={lang} className="lang" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: grid;
  margin: 2rem;
  margin-top: 1.5rem;
  max-width: var(--max-width);
  grid-template-columns: 2fr 1fr;
  align-items: center;
  position: relative;

  .nav-header {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 10px;
    border-bottom: solid 2px #b08968;
    z-index: -1001;

    .nav-contact {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .nav-contact-option {
        display: flex;
        gap: 0.5rem;

        p {
          margin: 0;
        }
      }
    }
  }

  .burger {
    width: 2rem;
    height: auto;
    position: absolute;
    top: 0rem;
    right: 0rem;
    color: var(--clr-primary-1);
    &:hover {
      cursor: pointer;
    }

    @media screen and (min-width: 980px) {
      display: none;
    }
  }
  .nav-links {
    display: none;

    @media screen and (min-width: 980px) {
      display: flex;
      gap: 1rem;
      letter-spacing: 0.2rem;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }

    @media screen and (min-width: 1250px) {
      font-size: 1rem;
      gap: 2rem;
    }

    .lang {
      width: 3rem;

      @media screen and (min-width: 1250px) {
        width: 3.5rem;
      }
    }

    .btn {
      transition: var(--transition);

      &:hover {
        color: var(--clr-primary-1);
        box-shadow: 0px 2px #b08968;
      }
    }
  }
`

export default Navbar
