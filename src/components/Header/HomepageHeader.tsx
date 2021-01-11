import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"

const HomepageHeader = () => {
  return (
    <MainGrid>
      <Container>
        <Col>
          <h1>
            Bridge the gap between <span>design</span> &{" "}
            <span>development</span>
          </h1>
        </Col>

        <ColAnim>
          <BricksWrapper>
            <Brick height={"10%"} delay={"0s"} />
            <Brick height={"20%"} delay={"0.2s"} />
            <Brick height={"40%"} delay={"0.4s"} />
            <Brick height={"60%"} delay={"0.6s"} />
            <Brick height={"80%"} delay={"0.8s"} />
            <Brick height={"90%"} delay={"1s"} />
            <Brick height={"80%"} delay={"1.2s"} />
            <Brick height={"60%"} delay={"1.4s"} />
            <Brick height={"40%"} delay={"1.6s"} />
            <Brick height={"20%"} delay={"1.8s"} />
            <Brick height={"10%"} delay={"2s"} />
          </BricksWrapper>
        </ColAnim>
      </Container>
    </MainGrid>
  )
}

export default HomepageHeader

const Container = styled.section`
  width: 100%;
  padding: 5rem 0 10rem;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 0 25rem;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  & span {
    font-style: italic;

    &::selection {
      color: ${theme.accent};
    }
  }
`
const Col = styled.div`
  & h1 {
    letter-spacing: 1.5px;

    &::selection {
      color: ${theme.accent};
    }
  }
  @media (min-width: 1024px) {
    width: 50%;
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
  animation: projectsHeader 10s ease infinite;
  @media (min-width: 1024px) {
    height: 50rem;
    margin-bottom: 0;
    width: 40%;
  }
`

const BricksWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`

interface IBrick {
  height: string
  delay: string
}
const Brick = styled.div<IBrick>`
  width: 8px;
  height: ${props => props.height};
  border-radius: 100px;
  background: ${theme.background.light};
  transform: scaleY(0.3);
  animation: growLine 2.4s ease-in infinite alternate ${props => props.delay};
`
