import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"

const HomepageHeader = () => {
  return (
    <MainGrid left>
      <Container>
        <h1>
          Making
          <br />
          <b>memorable</b>
          <br /> user experiences
        </h1>
      </Container>
    </MainGrid>
  )
}

export default HomepageHeader

const Container = styled.div`
  width: 100%;
  max-width: 60vw;
  padding: 10rem 0 25rem;
  @media (min-width: 1200px) {
    max-width: 1280px;
  }

  & h1 {
    @media (max-width: 1024px) {
      font-size: 70px;
      line-height: 84px;
    }
  }
`
