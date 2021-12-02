import React from "react"
import styled from "styled-components"
import pageLinks from "../constants/links"
import { BsXLg } from "react-icons/bs"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          key="sidebar"
          exit={{ opacity: 0, x: 1000 }}
        >
          <button className="btn" onClick={toggleSidebar}>
            <BsXLg className="exit-icon" />
          </button>

          <div className="sidebar-container">
            <ul className="sidebar-links">
              {pageLinks.map(link => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

const Wrapper = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: white;
  display: grid;
  place-items: center;

  .btn {
    background: none;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    .exit-icon {
      width: 2rem;
      height: auto;
      color: var(--clr-primary-1);
    }
  }

  .sidebar-container {
    font-size: 3rem;
    .sidebar-links li {
      margin: 2rem;
      letter-spacing: var(--spacing);
    }
  }
`

export default Sidebar
