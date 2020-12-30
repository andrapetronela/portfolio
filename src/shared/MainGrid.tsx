import React from "react"
import styled from "styled-components"

const MainGrid = ({ children }) => {
  return <Container>{children}</Container>
}

export default MainGrid

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 0 3%;
  }
  @media (min-width: 1200px) {
    width: 90%;
  }
`
