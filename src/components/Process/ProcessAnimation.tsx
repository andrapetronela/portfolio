import React from "react"
import styled from "styled-components"
import SmallGrid from "../../shared/SmallGrid"
import theme from "../../shared/theme"
import Step1 from "./Step1"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import Step7 from "./Step7"

const ProcessAnimation = () => {
  return (
    <Outer id="process">
      <SmallGrid left>
        <Container>
          <Heading>Process</Heading>
          <Step1 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
          <Step7 />
        </Container>
      </SmallGrid>
    </Outer>
  )
}

export default ProcessAnimation

const Outer = styled.section`
  /* display: none; */
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 15rem 0 0;
    display: block;
  }
`

const Container = styled.div`
  width: 100%;
`

const Heading = styled.h3`
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-bottom: 15rem;
  }
`
