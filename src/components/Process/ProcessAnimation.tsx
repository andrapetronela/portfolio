import React from "react"
import styled from "styled-components"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"

const ProcessAnimation = () => {
  return (
    <MainGrid left>
      <Container>
        <Heading>Process</Heading>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </Container>
    </MainGrid>
  )
}

export default ProcessAnimation

const Container = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    padding: 15rem 0;
  }
`

const Heading = styled.h3`
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-bottom: 15rem;
  }
`
