import React, { useState } from "react"
import styled from "styled-components"
import SmallGrid from "../../shared/SmallGrid"
import theme from "../../shared/theme"
import Button from "../Button"
import img1 from "../../images/projects/design/secondlife01.jpg"
import img2 from "../../images/projects/design/secondlife02.jpg"
import img3 from "../../images/projects/design/secondlife03.jpg"
import img3a from "../../images/projects/design/secondlife03a.jpg"

import img4 from "../../images/projects/dev/whiteco.jpg"
import img5 from "../../images/projects/dev/wytes.jpg"
import img6 from "../../images/projects/dev/trinity.jpg"
import img7 from "../../images/projects/dev/wam.jpg"
import img8 from "../../images/projects/dev/trado.jpg"

import calc01 from "../../images/projects/design/calculator01.jpg"
import calc02 from "../../images/projects/design/calculator02.jpg"
import calc03 from "../../images/projects/design/calculator03.jpg"
import calc03a from "../../images/projects/design/calculator03a.jpg"

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
  designMain?: string
  tools?: string
}

const tabs = [{ heading: "Web development" }, { heading: "Web design" }]

const section = [
  [
    {
      heading: "White and Co",
      link: "https://www.whiteandcodental.co.uk/",
      mainImage: img4,
      description:
        "Translating design into development wireframes, defining components and establishing relationship between them. Building front end components following wireframes. Styling components according to design, CMS integration, website performance improvement.",
    },
    {
      heading: "Wytes",
      link: "https://www.wytes.co.uk/",
      mainImage: img5,
      description:
        "Building front end components following wireframes. Styling components according to design. Created animated background gradients and custom CSS animations.",
    },
    {
      heading: "Trinity Claims",
      link: "http://www.trinityclaims.co.uk/",
      mainImage: img6,
      dark: true,
      description:
        "Translating design into development wireframes and defining components. Building front end components following wireframes. Styling components according to design. ",
    },
    {
      heading: "Trado",
      link: "https://apps.apple.com/gb/app/trado/id1497693898",
      mainImage: img8,
      description:
        "Building front end React Native components following wireframes. Styling components according to design. ",
    },
    {
      heading: "We are marmalade",
      link: "https://www.wearemarmalade.co.uk/",
      mainImage: img7,
      description:
        "Building front end components following wireframes. Styling components according to design. ",
    },
  ],
  [
    {
      heading: "Secondlife",
      gridImages: [img3a, img2, img3],
      description:
        "Mobile marketplace concept that allows its users to sell, buy and swap clothing items and accessories.",
      designMain: img1,
      tools: <p className="legal">Adobe XD, Photoshop, Illustrator</p>,
    },

    {
      heading: "Mortgage calculator",
      gridImages: [calc03a, calc02, calc03],
      description:
        "Easy to use Mortgage calculator concept - provides visual analysis of a mortgage cost. ",
      designMain: calc01,
      tools: <p className="legal">Adobe XD, Illustrator</p>,
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

                {item.designMain && (
                  <DevGrid>
                    <DesignMain>
                      <figure>
                        <img src={item.designMain} />
                      </figure>
                    </DesignMain>
                  </DevGrid>
                )}

                {item.designMain && (
                  <Description>
                    <p>{item.description}</p>
                    {item.tools && <Tools>{item.tools}</Tools>}
                  </Description>
                )}
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
                  <DevGrid>
                    <DevImage>
                      <figure>
                        <img src={item.mainImage} />
                      </figure>
                    </DevImage>
                    <Description>
                      <p>{item.description}</p>
                      <InlineLink href={item.link} target="_blank">
                        Visit website
                      </InlineLink>
                    </Description>
                  </DevGrid>
                )}
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

  @media (min-width: 768px) {
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
  margin-right: 5rem;
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
  margin-top: 4rem;
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
const DevGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const DevImage = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
  }
`
const InlineLink = styled.a`
  &,
  &:link,
  &:visited {
    color: ${theme.text.main};
    margin-top: 2rem;
    text-decoration: none;
    position: relative;
    font-size: 16px;
    line-height: 26px;
  }
  &::after {
    position: absolute;
    content: " ";
    height: 2px;
    width: 0%;
    bottom: -5px;
    left: 0;
    background: ${theme.text.main};
    transition: cubic-bezier(0.25, 1, 0.5, 1) 0.5s;
    margin: 0 auto;
    border-radius: 16px;
  }

  &:hover::after,
  &:active::after {
    width: 100%;
  }
`
const DesignMain = styled(DevImage)`
  margin-bottom: 8rem;
  @media (min-width: 768px) {
    width: 100%;
  }
`
const Tools = styled.div`
  & p {
    font-size: 14px;
    line-height: 24px;
    color: #b6b5b5;
  }
`
