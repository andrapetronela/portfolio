import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import logo from "../../images/logo.svg"
import text from "../../images/animation/step5-text.svg"
import anim from "../../images/animation/step5-anim.svg"
import hello from "../../images/animation/step5-hello.svg"

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

  .letter {
    position: absolute;
    top: 0;
    left: 60px;
    transition: all 1s ease;
    width: 4rem;
    transform: scale(0);
    opacity: 0;
  }

  .text {
    left: -400px;
    width: 15rem;
    transform: scale(0);
  }
  .anim {
    left: 320px;
    width: 10rem;
    transform: scale(0);
  }

  .hello {
    top: 120%;
    left: 100px;
    width: 12rem;
  }
`

const Step5 = () => (
  <TweenStyled>
    <div id="dev-anim" />

    <Controller>
      <Scene triggerElement="#dev-anim" duration={200} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "10%",
              transform: "scale(1)",
              opacity: "1",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={logo} className="letter logo" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#dev-anim" duration={200} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "20%",
              left: "60px",
              transform: "scale(1)",
              opacity: "1",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={text} className="letter text" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#dev-anim" duration={200} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "15%",
              left: "200px",
              transform: "scale(1)",
              opacity: "1",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={anim} className="letter anim" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#dev-anim" duration={200} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "37%",
              transform: "scale(1)",
              opacity: "1",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={hello} className="letter hello" />
          </Tween>
        )}
      </Scene>
    </Controller>
    <Text>
      <h5>Development</h5>
      <p>
        Once the design has passed the usability test, we can start developing
        the website, keeping the user experience as a top reference for all the
        decisions made during the process.
      </p>
    </Text>
  </TweenStyled>
)

export default Step5

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
