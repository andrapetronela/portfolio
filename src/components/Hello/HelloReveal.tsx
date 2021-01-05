import React, { useEffect } from "react"
import styled from "styled-components"
import theme from "../../shared/theme"
import MainGrid from "../../shared/MainGrid"
import img from "../../images/andra.jpg"
import hellotext from "../../images/hello-text.svg"
import hellomob from "../../images/hello-mobile.svg"

interface IHello {
  isVisible?: boolean
}
const Hello = ({ isVisible }: IHello) => {
  return (
    <MainGrid>
      <Container>
        <HelloText src={hellotext} alt="Hello" />
        <HelloMob src={hellomob} alt="Hello" />
        <Figure>
          <HelloImg src={img} alt="Andra" isVisible={isVisible} />
          <Overlay isVisible={isVisible} />
        </Figure>
      </Container>
    </MainGrid>
  )
}

export default Hello

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  &::selection {
    color: #aa857f;
  }
  & .section {
    margin-left: auto;
  }

  @media (min-width: 1024px) {
    height: 66rem;
  }
`

const HelloImg = styled.img<IHello>`
  margin-left: auto;
  @media (min-width: 1024px) {
    transition: transform 1s ease;
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${props =>
      props.isVisible
        ? "translate(-50%, -50%) scale(1.3)"
        : "translate(-50%, -50%) scale(0)"};
    animation: ${props => (props.isVisible ? "pic 2s" : "none")};
    animation-fill-mode: forwards;
  }
`

const HelloText = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    z-index: 2;
    width: 100%;
    bottom: 10px;
  }
`

const HelloMob = styled.img`
  display: block;
  width: 70%;
  @media (min-width: 1024px) {
    display: none;
  }
`
const Figure = styled.figure`
  width: 50rem;
  height: 80rem;
  overflow: hidden;
  display: none;
  @media (min-width: 1024px) {
    margin-left: auto;
    display: block;
    transition: all 1s ease;
    position: absolute;
    top: -20%;
    left: 56%;
    width: 45%;
    height: 66rem;
    border-radius: 2px;
    overflow: hidden;
  }
`
const Overlay = styled.div<IHello>`
  width: 100%;
  height: 100%;
  background-color: ${theme.accent};
  position: absolute;
  transition: all 0.5s;
  transform: scaleX(0);
  transform-origin: 0% 50%;
  animation: ${props => (props.isVisible ? "overlay 2s" : "none")};
`
