import React from "react"
import styled from "styled-components"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import Button from "../Button"
import img1 from "../../images/projects/movie-poster.png"
import img2 from "../../images/projects/pet-logo.jpg"
import img3 from "../../images/projects/calculator.png"
import img4 from "../../images/projects/poster-design.jpg"
import img5 from "../../images/projects/second-life.png"
import img6 from "../../images/projects/magazine.jpg"
import img7 from "../../images/projects/war.jpg"
import img8 from "../../images/projects/bird.png"
import img9 from "../../images/projects/glitch.png"

const HpGridProjects = () => {
  return (
    <MainGrid>
      <Inner>
        <Grid>
          <figure>
            <img src={img4} alt="Poster design final" />
          </figure>

          <figure>
            <img src={img9} alt="Glitch effect" />
          </figure>

          <figure>
            <img src={img6} alt="Magazine" />
          </figure>

          <figure>
            <img src={img3} alt="Calculator mortgage final" />
          </figure>

          <figure>
            <img src={img8} alt="Bird final" />
          </figure>

          <figure>
            <img src={img5} alt="Second life - product page final" />
          </figure>

          <figure>
            <img src={img2} alt="sf" />
          </figure>

          <figure>
            <img src={img7} alt="sf" />
          </figure>

          <figure>
            <img src={img1} alt="sf" />
          </figure>
        </Grid>
        <Button href="/projects" text="View more" marginTop="40px" />
      </Inner>
    </MainGrid>
  )
}

export default HpGridProjects

const Inner = styled.div`
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
