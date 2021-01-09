import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"

interface IHeader {
  title: string
}
const ProjectsHeader = ({ title }: IHeader) => {
  return (
    <MainGrid>
      <Container>
        <Col>
          <h1>{title}</h1>
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
  animation: growLine 2s ease-in infinite alternate ${props => props.delay};
`
