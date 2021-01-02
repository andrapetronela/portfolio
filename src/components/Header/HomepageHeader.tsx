import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"

const HomepageHeader = () => {
  return (
    <MainGrid left>
      <Container>
        <h1>
          Bridge the gap between <b>design</b> and <b>development</b> by
          creating
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
  padding: 10rem 0 25rem;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  & h1 {
    margin-bottom: 5rem;
    @media (max-width: 1024px) {
      font-size: 70px;
      line-height: 84px;
    }
  }

  & b {
    background: ${theme.text.main};
    color: ${theme.background.light};
    padding: 0 2rem;
  }
`
