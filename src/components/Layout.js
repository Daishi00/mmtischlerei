import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
