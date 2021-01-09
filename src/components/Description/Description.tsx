import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"
import Button from "../Button"

interface IDesc {
  isVisible?: boolean
}
const Description = ({ isVisible }: IDesc) => {
  return (
    <MainGrid>
      <Container>
        <Sticky isVisible={isVisible}>
          <h2>
            I am delighted to have <b>you</b> here.
          </h2>
          <h4>
            I hope you will enjoy your <b>journey</b>.
          </h4>
        </Sticky>
        <Col>
          <p>
            {" "}
            Some say I might be a <b>Unicorn</b>. Others call people like me a{" "}
            <b>hybrid</b>. Most are often confused and they think{" "}
            <b>UX Developer</b> really exists … Truth is … I am Andra - a{" "}
            <b>Front End developer</b> with a keen eye for <b>aesthetics</b>,
            eager to discover the latest <b>typography</b> trends, <b>colour</b>{" "}
            schemes and <b>motion graphics</b>.
          </p>

          <Button text="Read more" marginTop="40px" href="/about" />
        </Col>
      </Container>
    </MainGrid>
  )
}

export default Description

const Container = styled.section`
  position: relative;
  padding: 10rem 0 5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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
  margin-bottom: 10rem;
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
    width: ${props => (props.isVisible ? "100%" : "0%")};
    bottom: -20px;
    left: 0;
    background: ${theme.text.main};
    transition: cubic-bezier(0.25, 1, 0.5, 1) 0.5s;
    margin: 0 auto;
    border-radius: 16px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 48%;
  }
`
const Col = styled.div`
  @media (min-width: 768px) {
    padding-top: 50rem;
    width: 45%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  &::selection {
    color: #aa857f;
  }
`
