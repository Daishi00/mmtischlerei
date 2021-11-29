import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { BsArrowLeftShort } from "react-icons/bs"

const LinkButton = ({ text, to, icon, lang }) => {
  return (
    <Link to={to}>
      <Wrapper
        whileHover={{
          backgroundColor: "#e76f51",
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        {icon === "arrowLeft" ? <BsArrowLeftShort className="icon" /> : null}{" "}
        <Trans>{text}</Trans>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled(motion.button)`
  width: auto;
  height: 3rem;
  background: #f4a261;
  padding: 0 2rem;
  font-size: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  letter-spacing: 0.1rem;
  color: var(--clr-grey-1);
  .icon {
    width: 32px;
    height: auto;
  }
`

export default LinkButton
