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

  .letter {
    position: absolute;
    top: 50%50pt;
    left: -250px;
    transition: all 1s ease;
    width: 0px;
    height: 0px;
  }

  .a2 {
    left: -220px;
  }
  .a3 {
    left: 0;
  }
`

const Step2 = () => (
  <TweenStyled>
    <div id="letters-anim" />

    <Controller>
      <Scene triggerElement="#letters-anim" duration={350}>
        {progress => (
          <Tween
            to={{
              left: "300px",
              width: "90px",
              height: "90px",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={a1} className="letter a1" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#letters-anim" duration={300}>
        {progress => (
          <Tween
            to={{
              css: {
                left: "100px",
                width: "90px",
                height: "90px",
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
      <Scene triggerElement="#letters-anim" duration={200}>
        {progress => (
          <Tween
            to={{
              css: {
                left: "200px",
                width: "90px",
                height: "90px",
              },
              ease: "Strong.easeOut",
            }}
            totalProgress={progress}
            paused
          >
            <img src={a3} className="letter a2" />
          </Tween>
        )}
      </Scene>
    </Controller>
    <Text>
      {" "}
      <h5>Research</h5>
      <p>
        Studying <b>target</b> users and their requirements, adding realistic{" "}
        <b>contexts</b> and insights to the process will reveal valuable
        information which will conduct the <b>design process</b>.
      </p>
    </Text>
  </TweenStyled>
)

export default Step2

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
