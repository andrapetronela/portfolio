import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import logo from "../../images/review.svg"

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
    left: -500px;
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
              top: "65%",
              left: "0",
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
      <h5>Review</h5>
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

export default Step4

const Text = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
    position: sticky;
    top: 9rem;
    left: 0;
  }
  & h5 {
    font-weight: 600;
    margin-bottom: 8px;
  }
`
