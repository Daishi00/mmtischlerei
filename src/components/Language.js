import React from "react"
import styled from "styled-components"
import pl from "../images/flags/pl.svg"
import de from "../images/flags/de.svg"
import gb from "../images/flags/gb.svg"

import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
import { Link, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import { useContext } from "react"

const Lang = () => {
  const context = React.useContext(I18nextContext)
  const { languages, changeLanguage } = useI18next()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <button className="btn" onClick={() => setIsOpen(!isOpen)}>
        {context.language === "pl" ? (
          <img src={pl} alt="pl" className="img" />
        ) : context.language === "de" ? (
          <img src={de} alt="de" className="img" />
        ) : (
          <img src={gb} alt="gb" className="img" />
        )}
        <IoIosArrowDown className="icon" size={24} />
      </button>
      {isOpen ? (
        <ul className="language-container">
          {languages.flatMap(lng =>
            lng === context.language ? (
              []
            ) : (
              <li key={lng}>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    changeLanguage(lng)
                  }}
                >
                  {lng === "pl" ? (
                    <img src={pl} alt="pl" className="img" />
                  ) : lng === "de" ? (
                    <img src={de} alt="de" className="img" />
                  ) : (
                    <img src={gb} alt="gb" className="img" />
                  )}
                </a>
              </li>
            )
          )}
        </ul>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 4rem;
  justify-content: center;
  position: relative;
  .btn {
    display: flex;
    width: 100%;
    height: 2rem;
    background: transparent;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }
  .language-container {
    padding: 0.2rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    left: 0rem;
    margin-top: 2rem;
    z-index: 1000;
    background: #fff;
  }
  .img {
    width: 32px;
    height: 24px;
  }
`
export default Lang
