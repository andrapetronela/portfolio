import React, { useEffect } from "react"
import styled from "styled-components"
import theme from "../../shared/theme"
import MainGrid from "../../shared/MainGrid"
import img from "../../images/andra.jpg"
import hellotext from "../../images/hello-text.svg"
import hellomob from "../../images/hello-mobile.svg"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"

const Hello = () => {
  return (
    <MainGrid>
      <Container>
        <HelloText src={hellotext} alt="Hello" />
        <HelloMob src={hellomob} alt="Hello" />
        <Figure>
          <Controller>
            <div className="section" />
            <Scene duration="100%" offset={-250}>
              <Timeline wrapper={<div className="parallax" />}>
                <Tween
                  position="0"
                  from={{
                    yPercent: -5,
                  }}
                  to={{
                    yPercent: 0,
                  }}
                >
                  <HelloImg src={img} alt="Andra" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </Figure>
      </Container>
    </MainGrid>
  )
}

export default Hello

const Container = styled.div`
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

  & .parallax {
    height: 150%;
    width: 150%;
    overflow: hidden;
    left: -25%;
    position: relative;
  }
`

const HelloImg = styled.img`
  margin-left: auto;
  @media (min-width: 1024px) {
    display: block;
    width: 100%;
    vertical-align: middle;
    transition: all 1s ease;
  }
`

const HelloText = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    z-index: 2;
    width: 100%;
    position: absolute;
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
  }
`
