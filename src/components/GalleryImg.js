import React, { useContext, useState } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GatsbyContext } from "../context/context"
import { motion, AnimatePresence } from "framer-motion"
import { Trans } from "gatsby-plugin-react-i18next"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"

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
          paginate(1)
          handleSelectImage(data[0])
        } else {
          paginate(1)
          handleSelectImage(data[i + 1])
        }
      }
    }
  }

  const prevImage = (data, id) => {
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        if (i === 0) {
          paginate(-1)
          handleSelectImage(data[data.length - 1])
        } else {
          paginate(-1)
          handleSelectImage(data[i - 1])
        }
      }
    }
  }

  const [[page, direction], setPage] = useState([0, 0])

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <Wrapper>
      <Background onClick={() => handleSelectImage(null)} />
      <div className="img-container">
        <AnimatePresence custom={direction} initial={false}>
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                nextImage(data, id)
              } else if (swipe > swipeConfidenceThreshold) {
                prevImage(data, id)
              }
            }}
          >
            <GatsbyImage
              image={getImage(image.localFiles[0])}
              className="img"
              alt={title}
            />
            <div className="img-title">
              <h3>
                <Trans>{title}</Trans>
              </h3>
            </div>
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
    border-radius: var(--border-radius);

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
      position: absolute;
      width: 100%;
      height: 25rem;
      display: grid;
      place-items: center;
      @media screen and (min-width: 1020px) {
        height: 35rem;
      }

      .img {
        pointer-events: none;
      }
    }
    .img-title {
      position: absolute;
      width: 100%;
      bottom: 0;
      display: grid;
      place-items: center;
      text-transform: capitalize;
      background: rgba(0, 0, 0, 0.6);
      padding: 0.5rem;
      border-radius: 0 0 5px 5px;

      h3 {
        margin: 0;
        color: var(--clr-white);
      }
    }

    .btn {
      display: none;
      @media screen and (min-width: 640px) {
        display: block;
        position: absolute;
        border: none;
        background: none;
        cursor: pointer;
        z-index: 2003;
      }
      .icon {
        color: var(--clr-white);
      }
    }
    .btn-next {
      right: -6rem;
    }
    .btn-prev {
      left: -6rem;
    }

    .img {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
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
