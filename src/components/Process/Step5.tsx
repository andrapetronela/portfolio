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
    transform: scale(0);
    opacity: 0;
  }

  .text {
    left: -400px;
    transform: scale(0);
  }
  .anim {
    left: 320px;
    transform: scale(0);
  }

  .hello {
    top: 120%;
    left: 100px;
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
              top: "30%",
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
              top: "30%",
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
              top: "56%",
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
      {" "}
      <h5>Development</h5>
      <p>
        Either you need a <b>website</b> for your business, or you want to give
        your old website a <b>modern feeling</b>, the first step in the process
        should be understanding the <b>problem</b>. From this point, we can find{" "}
        <b>custom solutions</b> to ensure your users will get <b>the best</b>{" "}
        out of your products.
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
