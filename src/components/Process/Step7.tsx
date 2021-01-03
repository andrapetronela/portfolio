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
    left: 30px;
    opacity: 0;
    transition: all 1s ease;
    width: 250px;
  }

  .mac {
    left: 30px;
    top: 0;
  }
`

const Step7 = () => (
  <TweenStyled>
    <div id="launch-anim" />

    <Controller>
      <Scene triggerElement="#launch-anim" duration={400} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "20%",
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
      <Scene triggerElement="#launch-anim" duration={400} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "24%",
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
        Either you need a <b>website</b> for your business, or you want to give
        your old website a <b>modern feeling</b>, the first step in the process
        should be understanding the <b>problem</b>. From this point, we can find{" "}
        <b>custom solutions</b> to ensure your users will get <b>the best</b>{" "}
        out of your products.
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
    font-weight: 600;
    margin-bottom: 8px;
  }
`
