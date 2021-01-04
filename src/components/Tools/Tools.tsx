import React from "react"
import SmallGrid from "../../shared/SmallGrid"
import styled from "styled-components"
import theme from "../../shared/theme"

interface ITools {
  isVisible?: boolean
}
const Tools = ({ isVisible }: ITools) => {
  return (
    <SmallGrid left columns>
      <Inner>
        <Heading isVisible={isVisible}>Tools</Heading>
        <Container>
          <Sticky>
            <h3>Design</h3>
          </Sticky>
          <Col>
            <p>
              Abobe <b>Illustrator</b>
            </p>
            <p>
              <b>Abobe</b> Photoshop
            </p>
            <p>
              Abobe <b>XD</b>
            </p>
            <p>
              Abobe <b>After</b> Effects
            </p>
            <p>
              Web<b>Flow</b>
            </p>
          </Col>
        </Container>
        <Container>
          <Sticky>
            <h3>Development</h3>
          </Sticky>
          <Col>
            <p>
              HTML<b>5</b>
            </p>
            <p>
              <b>CSS</b>3
            </p>
            <p>
              Java<b>Script</b>
            </p>
            <p>
              <b>Type</b>Script
            </p>
            <p>
              React<b>JS</b>
            </p>
            <p>Gatsby</p>
            <p>
              Styled <b> Components</b>
            </p>
            <p>
              Graph<b>QL</b>
            </p>
            <p>Github</p>
          </Col>
        </Container>
      </Inner>
    </SmallGrid>
  )
}

export default Tools

const Inner = styled.div`
  padding: 10rem 0;
`

interface ISticky {
  isVisible?: boolean
}

const Heading = styled.h2<ISticky>`
  position: relative;
  display: block;
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
`

const Container = styled.div`
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

const Sticky = styled.div`
  position: relative;
  margin-bottom: 10rem;
  @media (min-width: 768px) {
    margin-bottom: 0rem;
    position: sticky;
    left: 0;
    bottom: 0;
    top: 100px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`
const Col = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
  &::selection {
    color: #aa857f;
  }
`
