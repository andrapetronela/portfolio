import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import a1 from "../../images/a-cap.svg"
import n from "../../images/n.svg"
import d from "../../images/d.svg"
import r from "../../images/r.svg"
import a2 from "../../images/a-low.svg"

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
    top: 41px;
    left: -95px;
  }
  .d {
    top: -41px;
    left: -140px;
  }
  .r {
    top: 41px;
    left: 185px;
  }
  .a2 {
    top: 41px;
    left: 325px;
  }
`

const Step3 = () => (
  <TweenStyled>
    <div id="name-anim" />

    <Controller>
      <Scene triggerElement="#name-anim" duration={800} offset={100}>
        {progress => (
          <Tween
            to={{
              top: "63.2%",
              left: "0px",
              rotation: -360,
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
      <Scene
        triggerElement="#name-anim"
        duration={300}
        pin={false}
        offset={100}
      >
        {progress => (
          <Tween
            to={{
              css: {
                top: "70%",
                left: "95px",
                rotation: 360,
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
      <Scene
        triggerElement="#name-anim"
        duration={400}
        pin={false}
        offset={100}
      >
        {progress => (
          <Tween
            to={{
              css: {
                left: "140px",
                top: "70%",
                rotation: -360,
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
      <Scene
        triggerElement="#name-anim"
        duration={700}
        pin={false}
        offset={100}
      >
        {progress => (
          <Tween
            to={{
              css: {
                left: "180px",
                top: "70%",
                rotation: 360,
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
      <Scene
        triggerElement="#name-anim"
        duration={450}
        pin={false}
        offset={100}
      >
        {progress => (
          <Tween
            to={{
              css: {
                left: "220px",
                top: "70%",
                rotation: -360,
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
      <h5>Design</h5>
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

export default Step3

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
