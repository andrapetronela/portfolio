import React from "react"
import styled from "styled-components"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import Button from "../Button"

interface Item {
  img: string
  alt: string
}
interface HpGrid {
  data: Array<Item>
}
const HpGridProjects = ({ data }: HpGrid) => {
  return (
    <MainGrid>
      <Inner>
        <Grid>
          {data &&
            data.map((item, key) => {
              return (
                <figure key={key}>
                  <img src={item.img} alt={item.alt} />
                </figure>
              )
            })}
        </Grid>
        <Button href="/projects" text="View more" marginTop="40px" />
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
