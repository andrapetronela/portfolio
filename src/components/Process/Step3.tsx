import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import a1 from "../../images/animation/a-cap.svg"
import n from "../../images/animation/n.svg"
import d from "../../images/animation/d.svg"
import r from "../../images/animation/r.svg"
import a2 from "../../images/animation/a-low.svg"

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
    left: -350px;
    transition: all 0.8s ease;
    opacity: 0;
  }

  .n {
    left: -95px;
  }
  .d {
    left: -140px;
  }
  .r {
    left: 485px;
  }
  .a2 {
    left: 400px;
  }
`

const Step3 = () => (
  <TweenStyled>
    <div id="name-anim" />

    <Controller>
      <Scene triggerElement="#name-anim" duration={180} offset={20}>
        {progress => (
          <Tween
            to={{
              left: "80px",
              opacity: 1,
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={a1} className="letter a1" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#name-anim" duration={190} pin={false} offset={20}>
        {progress => (
          <Tween
            to={{
              css: {
                left: "175px",
                opacity: 1,
              },
              ease: "Strong.easeOut",
            }}
            totalProgress={progress}
            paused
          >
            <img src={n} className="letter n" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#name-anim" duration={140} pin={false} offset={20}>
        {progress => (
          <Tween
            to={{
              css: {
                left: "220px",
                opacity: 1,
              },
              ease: "Strong.easeOut",
            }}
            totalProgress={progress}
            paused
          >
            <img src={d} className="letter d" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#name-anim" duration={210} pin={false} offset={20}>
        {progress => (
          <Tween
            to={{
              css: {
                left: "260px",
                opacity: 1,
              },
              ease: "Strong.easeOut",
            }}
            totalProgress={progress}
            paused
          >
            <img src={r} className="letter r" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#name-anim" duration={150} pin={false} offset={20}>
        {progress => (
          <Tween
            to={{
              css: {
                left: "300px",

                opacity: 1,
              },
              ease: "Strong.easeOut",
            }}
            totalProgress={progress}
            paused
          >
            <img src={a2} className="letter a2" />
          </Tween>
        )}
      </Scene>
    </Controller>
    <Text>
      {" "}
      <h5>Prototype</h5>
      <p>
        Evaluating the brand, researching the industry, generating ideas,
        solutions, sketching and wireframing are all steps that can't be skipped
        in the process of design.
      </p>
    </Text>
  </TweenStyled>
)

export default Step3

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
