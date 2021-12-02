import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GatsbyContext } from "../context/context"
import { motion, AnimatePresence } from "framer-motion"
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
} from "react-icons/md"

const imgVariants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const btnVariants = {
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
  },
}

const GalleryImg = ({ dataSelected, data }) => {
  const { handleSelectImage } = useContext(GatsbyContext)
  const { image, title } = dataSelected.data
  const { id } = dataSelected

  const nextImage = (data, id) => {
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        if (i === data.length - 1) {
          handleSelectImage(data[0])
        } else {
          handleSelectImage(data[i + 1])
        }
      }
    }
    return paginate(1)
  }

  const prevImage = (data, id) => {
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        if (i === 0) {
          handleSelectImage(data[data.length - 1])
        } else {
          handleSelectImage(data[i - 1])
        }
      }
    }
    return paginate(-1)
  }

  const [[page, direction], setPage] = useState([0, 0])

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <Wrapper>
      <Background />
      <div className="img-container">
        <AnimatePresence custom={direction} initial={false} exitBeforeEnter>
          <motion.div
            className="img-motion"
            variants={imgVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            key={id}
          >
            <GatsbyImage
              image={getImage(image.localFiles[0])}
              className="img"
              alt={title}
            />
          </motion.div>
        </AnimatePresence>
        <motion.button
          className="btn btn-prev"
          onClick={() => prevImage(data, id)}
          variants={btnVariants}
          whileTap="tap"
          whileHover="hover"
        >
          <MdKeyboardArrowLeft size={96} className="icon" />
        </motion.button>
        <motion.button
          className="btn btn-exit"
          onClick={() => handleSelectImage(null)}
          variants={btnVariants}
          whileTap="tap"
          whileHover="hover"
        >
          <MdKeyboardArrowDown size={96} className="icon" />
        </motion.button>
        <motion.button
          className="btn btn-next"
          onClick={() => nextImage(data, id)}
          variants={btnVariants}
          whileTap="tap"
          whileHover="hover"
        >
          <MdKeyboardArrowRight size={96} className="icon" />
        </motion.button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  position: fixed;
  display: grid;
  place-items: center;

  .img-container {
    z-index: 2001;
    width: 20rem;
    height: 25rem;
    display: grid;
    place-items: center;
    position: relative;
    border-radius: 5px;
    @media screen and (min-width: 640px) {
      width: 25rem;
    }
    @media screen and (min-width: 800px) {
      width: 40rem;
    }
    @media screen and (min-width: 1020px) {
      width: 55rem;
      height: 35rem;
    }

    .img-motion {
      width: 100%;
      height: 25rem;
      display: grid;
      place-items: center;

      @media screen and (min-width: 1020px) {
        height: 35rem;
      }
    }
    .btn {
      position: absolute;
      border: none;
      background: none;
      cursor: pointer;

      .icon {
        color: #fff;
      }
    }
    .btn-next {
      right: -4.4rem;

      @media screen and (min-width: 640px) {
        right: -6rem;
      }
    }
    .btn-prev {
      left: -4.4rem;

      @media screen and (min-width: 640px) {
        left: -6rem;
      }
    }
    .btn-exit {
      bottom: -4.4rem;

      @media screen and (min-width: 640px) {
        bottom: -6rem;
      }
    }

    .img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
`
const Background = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  position: fixed;
  display: grid;
  background: black;
  opacity: 0.5;
`

export default GalleryImg
