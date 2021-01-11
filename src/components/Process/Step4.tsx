import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import logo from "../../images/animation/review.svg"

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
    top: 20%;
    left: -200px;
    width: 0px;
    transition: all 1s ease;
  }
`

const Step4 = () => (
  <TweenStyled>
    <div id="logo-anim" />

    <Controller>
      <Scene triggerElement="#logo-anim" duration={400} offset={100}>
        {progress => (
          <Tween
            to={{
              width: "20%",
              left: "10%",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={logo} className="letter a1" />
          </Tween>
        )}
      </Scene>
    </Controller>
    <Text>
      {" "}
      <h5>Review & evaluate</h5>
      <p>
        Evaluating and refining the design based on the feedback received from
        user tests and client review is an important step in the process of
        generating a human-centered product.
      </p>
    </Text>
  </TweenStyled>
)

export default Step4

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
