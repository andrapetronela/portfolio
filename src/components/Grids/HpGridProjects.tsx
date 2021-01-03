import React from "react"
import styled from "styled-components"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import img1 from "../../images/projects/calculator.png"

const HpGridProjects = () => {
  return (
    <MainGrid>
      <Grid>
        <figure>
          <img src={img1} alt="sf" />
          <figcaption>Project</figcaption>
        </figure>

        <figure>
          <img src={img1} alt="sf" />
          <figcaption>Project</figcaption>
        </figure>

        <figure>
          <img src={img1} alt="sf" />
          <figcaption>Project</figcaption>
        </figure>
        <figure>
          <img src={img1} alt="sf" />
          <figcaption>Project</figcaption>
        </figure>

        <figure>
          <img src={img1} alt="sf" />
          <figcaption>Project</figcaption>
        </figure>

        <figure>
          <img src={img1} alt="sf" />
          <figcaption>Project</figcaption>
        </figure>
      </Grid>
    </MainGrid>
  )
}

export default HpGridProjects

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  & figure:nth-of-type(1) {
    @media (min-width: 768px) {
      grid-column: 1 / span 3;
      grid-row: 1 / span 3;
    }
  }
  & figure:nth-of-type(2) {
    @media (min-width: 768px) {
      grid-column: 4 / span 4;
      grid-row: 1 / span 5;
    }
  }

  & figure:nth-of-type(3) {
    @media (min-width: 768px) {
      grid-column: 8 / span 3;
      grid-row: 1 / span 4;
    }
  }

  & figure:nth-of-type(4) {
    @media (min-width: 768px) {
      grid-column: 1 / span 3;
      grid-row: 4 / span 4;
    }
  }

  & figure:nth-of-type(5) {
    @media (min-width: 768px) {
      grid-column: 4 / span 4;
      grid-row: 6 / span 4;
    }
  }

  & figure:nth-of-type(6) {
    @media (min-width: 768px) {
      grid-column: 8 / span 3;
      grid-row: 5 / span 3;
    }
  }
`
