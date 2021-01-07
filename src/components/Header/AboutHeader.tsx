import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"
import circle1 from "../../images/about-circles/circles-02.svg"
import circle2 from "../../images/about-circles/circles-03.svg"
import circle3 from "../../images/about-circles/circles-04.svg"
import circle4 from "../../images/about-circles/circles-05.svg"
// import circle5 from "../../images/about-circles/circles-06.svg"

const AboutHeader = () => {
  return (
    <MainGrid>
      <Container>
        <Col>
          <h1>About</h1>
        </Col>
        <ColAnim>
          <BricksWrapper>
            <Circle src={circle1} alt="Circle" delay="0s" timing="0.4s" />
            <Circle src={circle2} alt="Circle" delay="0.4s" timing="0.6s" />
            <Circle src={circle3} alt="Circle" delay="0.8s" timing="0.8s" />
            <Circle src={circle4} alt="Circle" delay="1.2s" timing="1s" />
            {/* <Circle src={circle5} alt="Circle" delay="1.6s" timing="1.2s" /> */}
          </BricksWrapper>
        </ColAnim>
      </Container>
    </MainGrid>
  )
}

export default AboutHeader

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
const Col = styled.div`
  padding-bottom: 5rem;
  @media (min-width: 1024px) {
    padding-bottom: 0;
    width: 45%;
  }
`

const ColAnim = styled.div`
  display: flex;
  align-items: center;
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

const BricksWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 24px;
  position: relative;
  perspective: 1000px;
`
interface ICircle {
  timing: string
  delay: string
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
  animation: rotateY 10s ease-in infinite ${props => props.delay};
  &::selection {
    color: ${theme.accent};
  }
`
