import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import testing from "../../images/animation/testing.svg"

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
    top: 50%;
    left: 50%;
    opacity: 0;
    transition: all 1s ease;
    width: 0;
    transform-origin: center;
  }
`

const Step6 = () => (
  <TweenStyled>
    <div id="testing-anim" />

    <Controller>
      <Scene triggerElement="#testing-anim" duration={400} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "20%",
              left: "200px",
              opacity: "1",
              width: "180px",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={testing} className="letter testing" />
          </Tween>
        )}
      </Scene>
    </Controller>
    <Text>
      {" "}
      <h5>Testing</h5>
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

export default Step6

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
