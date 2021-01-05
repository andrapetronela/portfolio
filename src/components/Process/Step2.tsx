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
    top: 0;
    left: 20px;
    transition: all 0.8s ease;
    width: 0px;
    height: 0px;
  }

  .a2 {
    left: 120px;
  }
  .a3 {
    top: 50%;
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
              top: "75%",
              left: "250px",
              rotation: -360,
              width: "80px",
              height: "80px",
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <img src={a1} className="letter a1" />
          </Tween>
        )}
      </Scene>
      <Scene triggerElement="#letters-anim" duration={500} pin={false}>
        {progress => (
          <Tween
            from={{
              css: {
                left: "120px",
                rotation: -360,
              },
              ease: "Strong.easeOut",
            }}
            to={{
              css: {
                left: "250px",
                rotation: -180,
                width: "105px",
                height: "105px",
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
      <Scene triggerElement="#letters-anim" duration={200} pin={false}>
        {progress => (
          <Tween
            from={{
              css: {
                left: "250px",
                top: "50%",
              },
              ease: "Strong.easeOut",
            }}
            to={{
              css: {
                left: "150px",
                top: "25%",
                rotation: -180,
                width: "150px",
                height: "150px",
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
        Either you need a <b>website</b> for your business, or you want to give
        your old website a <b>modern feeling</b>, the first step in the process
        should be understanding the <b>problem</b>. From this point, we can find{" "}
        <b>custom solutions</b> to ensure your users will get <b>the best</b>{" "}
        out of your products.
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
