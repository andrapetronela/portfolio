import React, { useState } from "react"
import styled from "styled-components"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import Button from "../Button"
import previous from "../../images/previous.svg"
import next from "../../images/next.svg"
import close from "../../images/close.svg"

interface Item {
  img: string
  alt: string
}
interface HpGrid {
  data: Array<Item>
}
const HpGridProjects = ({ data }: HpGrid) => {
  const [modalOpen, toggleModal] = useState(false)
  let [activeImg, setActiveImg] = useState(0)

  const nextSlide = () => {
    if (activeImg < data.length - 1) {
      setActiveImg(activeImg + 1)
    }
  }

  const prevSlide = () => {
    if (activeImg > 0) {
      setActiveImg(activeImg - 1)
    }
  }
  return (
    <MainGrid>
      <Inner>
        <Grid>
          {data &&
            data.map((item, key) => {
              return (
                <figure
                  key={key}
                  onClick={() => {
                    setActiveImg(key)
                    toggleModal(true)
                  }}
                >
                  <img src={item.img} alt={item.alt} />
                </figure>
              )
            })}
        </Grid>
        <Button href="/projects" text="View more" marginTop="40px" />

        <Modal showModal={modalOpen} onClick={() => toggleModal(false)}>
          <Close src={close} alt="Close" onClick={() => toggleModal(false)} />
          <ModalImg
            src={data[activeImg].img}
            onClick={e => {
              e.stopPropagation()
            }}
          />
          <ArrowsContainer>
            <Arrow
              opacity={activeImg === 0}
              src={previous}
              alt="Previous"
              onClick={e => {
                e.stopPropagation()
                prevSlide()
              }}
            />
            <Arrow
              opacity={activeImg === data.length - 1}
              src={next}
              alt="Next"
              onClick={e => {
                e.stopPropagation()
                nextSlide()
              }}
            />
          </ArrowsContainer>
        </Modal>
      </Inner>
    </MainGrid>
  )
}

export default HpGridProjects

const Inner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(10, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 0.5s;
  }

  & figure:nth-of-type(1) {
    @media (min-width: 1200px) {
      grid-column: 1 / span 3;
      grid-row: 1 / span 3;
    }
  }

  & figure:nth-of-type(2) {
    @media (min-width: 1200px) {
      grid-column: 4 / span 2;
      grid-row: 5 / span 1;
    }
  }

  & figure:nth-of-type(3) {
    @media (min-width: 1200px) {
      grid-column: 1 / span 3;
      grid-row: 4 / span 2;
    }
  }

  & figure:nth-of-type(4) {
    @media (min-width: 1200px) {
      grid-column: 4 / span 2;
      grid-row: 1 / span 1;
    }
  }

  & figure:nth-of-type(5) {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
    @media (min-width: 1200px) {
      grid-column: 6 / span 2;
      grid-row: 1 / span 1;
    }
  }

  & figure:nth-of-type(6) {
    @media (min-width: 1200px) {
      grid-column: 4 / span 4;
      grid-row: 2 / span 3;
    }
  }

  & figure:nth-of-type(7) {
    @media (min-width: 1200px) {
      grid-column: 6 / span 2;
      grid-row: 5 / span 1;
    }
  }

  & figure:nth-of-type(8) {
    @media (min-width: 1200px) {
      grid-column: 8 / span 4;
      grid-row: 1 / span 2;
    }
  }

  & figure:nth-of-type(9) {
    @media (min-width: 1200px) {
      grid-column: 8 / span 4;
      grid-row: 3 / span 3;
    }
  }
`
interface IModal {
  showModal?: boolean
}

const Modal = styled.div<IModal>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => (props.showModal ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
  z-index: 999;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

const Close = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 5rem;
  right: 5rem;
  cursor: pointer;
`
const ModalImg = styled.img`
  max-width: 80vw;
  max-height: 75vh;
`
const ArrowsContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 4rem;
  margin: 0 auto;
  top: 94%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1024px) {
    top: 90%;
  }
`
interface IArrow {
  opacity?: boolean
}

const Arrow = styled.img<IArrow>`
  width: 35px;
  height: 35px;
  opacity: ${props => (props.opacity ? "0.5" : "1")};
  transform: ${props => (props.opacity ? "scale(0.9)" : "none")};
  cursor: pointer;
  transition: all 0.3s ease;
`
