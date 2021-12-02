import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { useState } from "react"
import { motion } from "framer-motion"

const Layout = ({ children, data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} data={data} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} data={data} />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.main>
      <Footer data={data} />
    </>
  )
}

export default Layout
