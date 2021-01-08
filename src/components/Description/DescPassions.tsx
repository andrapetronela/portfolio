import React from "react"
import SmallGrid from "../../shared/SmallGrid"
import styled from "styled-components"
import theme from "../../shared/theme"

interface IDesc {
  isVisible?: boolean
}
const DescPassions = ({ isVisible }: IDesc) => {
  return (
    <SmallGrid>
      <Container>
        <Col>
          I like to <b>travel</b> and to meet new people. I could spend months
          on a <b>beech</b> and enjoying the <b>sun</b>, whilst I listen to best{" "}
          <b>house</b> music. <b>Photography</b> plays an important role, as it
          helps me keeping <b>memories</b> actual.
        </Col>
        <Sticky isVisible={isVisible}>
          <h2>Outside work</h2>
        </Sticky>
      </Container>
    </SmallGrid>
  )
}

export default DescPassions

const Container = styled.section`
  position: relative;
  padding: 5rem 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    padding: 20rem 0 15rem;

    flex-direction: row;
    justify-content: space-between;
  }
`

interface ISticky {
  isVisible?: boolean
}
const Sticky = styled.div<ISticky>`
  position: relative;
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    margin-bottom: 0rem;
    position: sticky;
    left: 0;
    bottom: 0;
    top: 100px;
  }

  &::after {
    position: absolute;
    content: " ";
    height: 2px;
    width: ${props => (props.isVisible ? "90%" : "0%")};
    bottom: -20px;
    left: 0;
    background: ${theme.text.main};
    transition: cubic-bezier(0.25, 1, 0.5, 1) 0.5s;
    margin: 0 auto;
    border-radius: 16px;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`
const Col = styled.div`
  @media (min-width: 768px) {
    padding-top: 50rem;
    width: 48%;
  }
  &::selection {
    color: #aa857f;
  }
`
