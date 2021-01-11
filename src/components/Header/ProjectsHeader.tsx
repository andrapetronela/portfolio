import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"
import circle1 from "../../images/about-circles/circles-02.svg"
import circle2 from "../../images/about-circles/circles-03.svg"
import circle3 from "../../images/about-circles/circles-04.svg"
import circle4 from "../../images/about-circles/circles-05.svg"

interface IHeader {
  title: string
  animation: string
}
const ProjectsHeader = ({ title, animation }: IHeader) => {
  return (
    <MainGrid>
      <Container>
        <Col>
          <h1>{title}</h1>
        </Col>
        <ColAnim>
          <BricksWrapper>
            <Circle
              src={circle1}
              alt="Circle"
              delay="0s"
              animation={animation}
            />
            <Circle
              src={circle2}
              alt="Circle"
              delay="0.4s"
              animation={animation}
            />
            <Circle
              src={circle3}
              alt="Circle"
              delay="0.8s"
              animation={animation}
            />
            <Circle
              src={circle4}
              alt="Circle"
              delay="1.2s"
              animation={animation}
            />
          </BricksWrapper>
        </ColAnim>
      </Container>
    </MainGrid>
  )
}

export default ProjectsHeader

const Container = styled.section`
  width: 100%;
  padding: 5rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  & span {
    background: ${theme.text.main};
    color: ${theme.background.light};
    padding: 0 1rem;
    @media (max-width: 1024px) {
      padding: 0 0.5rem;
    }

    &::selection {
      color: #aa857f;
    }
  }
`
const ColAnim = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
  height: 60vw;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  @media (min-width: 1024px) {
    height: 50rem;
    margin-bottom: 0;
    width: 50%;
  }
`

const Col = styled.div`
  padding-bottom: 5rem;
  @media (min-width: 1024px) {
    padding-bottom: 0;
    width: 45%;
  }
`

const BricksWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 24px;
  position: relative;
  perspective: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`
interface ICircle {
  delay: string
  animation: string
}
const Circle = styled.img<ICircle>`
  position: absolute;
  transform: scale(0);
  transition: all 2s ease;
  opacity: 0;
  top: 0%;
  left: 0%;
  transform-origin: center center;
  transform-style: preserve-3d;
  animation: ${props => props.animation} 10s ease-in infinite
    ${props => props.delay};
  &::selection {
    color: ${theme.accent};
  }
`
