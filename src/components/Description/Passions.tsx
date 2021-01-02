import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"

interface IPass {
  isVisible?: boolean
}
const Passions = ({ isVisible }: IPass) => {
  return (
    <MainGrid>
      <Container>
        <Sticky isVisible={isVisible}>
          <h3>Passions</h3>
        </Sticky>
        <Col>
          <li>front end dev</li>
          <li>animations</li>
          <li>logo design</li>
          <li>brand identity</li>
          <li>ui - ux design</li>
        </Col>
      </Container>
    </MainGrid>
  )
}

export default Passions

const Container = styled.div`
  position: relative;
  padding: 20rem 0 15rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 768px) {
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
    height: 4px;
    width: ${props => (props.isVisible ? "90%" : "0%")};
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
`
const Col = styled.ul`
  & li {
    list-style-type: none;
    font-size: 45px;
    line-height: 61px;

    @media (min-width: 1024px) {
      font-size: 8rem;
      line-height: 9.6rem;
    }
  }

  @media (min-width: 768px) {
    padding-top: 30rem;
    width: 50%;
  }
`
