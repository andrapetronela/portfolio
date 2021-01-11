import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import mac from "../../images/animation/mac.svg"
import launch from "../../images/animation/launch.svg"

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
    top: 100%;
    left: -300px;
    opacity: 0;
    transition: all 1s ease;
    width: 200px;
  }

  .mac {
    left: 300px;
    top: 0;
  }
`

const Step7 = () => (
  <TweenStyled>
    <div id="launch-anim" />

    <Controller>
      <Scene triggerElement="#launch-anim" duration={200} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "0%",
              left: "60px",
              opacity: "1",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={mac} className="letter mac" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#launch-anim" duration={200} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "4%",
              left: "60px",
              opacity: "1",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={launch} className="letter launch" />
          </Tween>
        )}
      </Scene>
    </Controller>
    <Text>
      {" "}
      <h5>Lauch</h5>
      <p>
        Now it's time for your users to meet the new product. Other tests will
        be run at this stage, to ensure everything is working as exected and the
        product offers the best user experience.
      </p>
    </Text>
  </TweenStyled>
)

export default Step7

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
