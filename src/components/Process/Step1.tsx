import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import a1 from "../../images/animation/a1.svg"
import a2 from "../../images/animation/a2.svg"
import a3 from "../../images/animation/a3.svg"

const TweenStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: 80vh;
  padding-bottom: 10rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  .section {
    height: 100vh;
  }

  .tween {
    width: 20px;
    height: 20px;
    position: relative;
    transition: all 0.5s ease;
    animation: floatProcessSquareMobile 8s ease-in-out forwards infinite;
    @media (min-width: 768px) {
      animation: floatProcessSquare 8s ease-in-out forwards infinite;
    }
  }
  .square-1,
  .square-2 {
    width: 20px;
    height: 20px;
    position: relative;
    transition: all 0.5s ease;
    animation: floatProcessSquareMobile 6s ease-in-out forwards infinite 0.5s;
    @media (min-width: 768px) {
      animation: floatProcessSquare 6s ease-in-out forwards infinite 0.5s;
    }
  }

  .square-2 {
    animation: floatProcessSquareMobile 10s ease-in-out forwards infinite 1s;
    @media (min-width: 768px) {
      animation: floatProcessSquare 10s ease-in-out forwards infinite 1s;
    }
  }
`

const Step1 = () => (
  <TweenStyled>
    <div id="trigger" />
    <img src={a1} className="square-1" />

    <Controller>
      <Scene triggerElement="#trigger" duration={700}>
        {progress => (
          <Tween
            to={{
              left: "0px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={a2} className="tween" />
          </Tween>
        )}
      </Scene>
      <img src={a3} className="square-2" />
    </Controller>
    <Text>
      {" "}
      <h5>Identify the problem</h5>
      <p>
        Either you need a <b>website</b> for your business, or you want to give
        your old website a <b>modern feeling</b>, the first step in the process
        should be understanding the <b>problem</b> your users are facing. Now we
        can find <b>custom solutions</b> to ensure your users will get{" "}
        <b>the best</b> user experience.
      </p>
    </Text>
  </TweenStyled>
)

export default Step1

const Text = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
    position: sticky;
    top: 100px;
    left: 0;
  }
  & h5 {
    margin-bottom: 8px;
  }
`
