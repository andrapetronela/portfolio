import React, { useState } from "react"
import styled from "styled-components"
import SmallGrid from "../../shared/SmallGrid"
import theme from "../../shared/theme"
import Button from "../Button"
import img1 from "../../images/projects/bird.png"
import img2 from "../../images/projects/bird.png"
import img3 from "../../images/projects/bird.png"

import img4 from "../../images/projects/dev/whiteco.jpg"
import img5 from "../../images/projects/dev/wytes.jpg"

interface Item {
  img: string
  alt: string
}
interface HpGrid {
  data: Array<Item>
  noButton?: boolean
}
interface Project {
  heading: string
  mainImage?: string
  description: string
  gridImages?: Array<string>
  link?: string
}

const tabs = [{ heading: "Web development" }, { heading: "Web design" }]

const section = [
  [
    {
      heading: "White and Co",
      link: "https://www.whiteandcodental.co.uk/",
      mainImage: img4,
      description:
        "Translating desing into React components, Translating desing into React components, Translating desing into React components",
    },
    {
      heading: "Wytes",
      link: "https://www.wytes.co.uk/",
      mainImage: img5,
      description: "Translating desing into React components",
    },
  ],
  [
    {
      heading: "Mortgage Calculator",
      gridImages: [img1, img2, img3],
      description: "Concept using AdobXD",
    },
  ],
]
const ProjectsGrid = ({ data, noButton }: HpGrid) => {
  const [category, setCategory] = useState(0)

  return (
    <SmallGrid>
      <Inner>
        <Section>
          <Tabs id="tabs">
            {tabs &&
              tabs.map((item, key) => {
                return (
                  <Tab
                    key={key}
                    onClick={() => {
                      setCategory(key)
                    }}
                    isActive={key === category}
                  >
                    {item.heading}
                  </Tab>
                )
              })}
          </Tabs>

          {section[category].map((item: Project, key: number) => {
            return (
              <InnerContainer key={key}>
                <h2>{item.heading}</h2>
                {item.gridImages && (
                  <ProjectGrid>
                    {item.gridImages.map((img: string, key: number) => {
                      return (
                        <figure key={key}>
                          <img src={img} key={key} />
                        </figure>
                      )
                    })}
                  </ProjectGrid>
                )}

                {item.mainImage && (
                  <DevImage>
                    <figure>
                      <a href={item.link} target="_blank">
                        <img src={item.mainImage} />
                        <Blur>
                          <p>Visit website</p>
                        </Blur>
                      </a>
                    </figure>
                  </DevImage>
                )}

                <Description>{item.description}</Description>
              </InnerContainer>
            )
          })}
        </Section>
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

        {!noButton && (
          <Button href="/projects" text="View more" marginTop="40px" />
        )}
      </Inner>
    </SmallGrid>
  )
}

export default ProjectsGrid

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
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const Section = styled.div`
  width: 100%;
  padding: 5rem 0;

  @media (min-width: 1024px) {
    padding: 10rem 0 15rem;
  }
`

interface ITab {
  isActive?: boolean
}
const Tab = styled.p<ITab>`
  width: 130px;
  padding-bottom: 16px;
  position: relative;
  cursor: pointer;
  text-align: center;
  &::after {
    position: absolute;
    content: " ";
    height: 2px;
    border-radius: 30px;
    width: 100%;
    bottom: -1px;
    left: -1px;
    background: ${theme.accent};
    transition: all ease-out 0.3s;
    margin: 0 auto;
    transform: scaleX(0);
    ${props => props.isActive && `transform: scaleX(1);`}
  }

  @media (min-width: 768px) {
    width: 200px;
    margin-right: 10rem;
  }

  @media (max-width: 767px) {
    padding-bottom: 5px;
  }
`

const InnerContainer = styled.div`
  padding: 5rem 0;
  & h2 {
    margin-bottom: 5rem;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 30vw);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-rows: repeat(2, 40rem);
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  & figure:first-of-type {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  & figure:nth-of-type(2) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
  }

  & figure:nth-of-type(3) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
`
const DevImage = styled.div`
  width: 100%;
  height: 45vw;
  position: relative;
  overflow: hidden;
  @media (min-width: 1024px) {
    height: 52rem;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`
const Blur = styled.div`
  width: 20rem;
  height: 10rem;
  background: ${theme.background.light};
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(18px);
  transform: scale(0);
  transition: transform 1s ease;
  transform-origin: left bottom;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 20%;
    height: 20%;
  }
  ${DevImage}:hover & {
    transform: scale(1);
  }

  & p {
    color: ${theme.text.main};
    opacity: 1;
  }
`
const Description = styled.p`
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`
