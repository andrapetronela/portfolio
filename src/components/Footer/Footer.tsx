import React from "react"
import styled from "styled-components"
import SmallGrid from "../../shared/SmallGrid"
import theme from "../../shared/theme"
import a from "../../images/a.svg"
import circle from "../../images/logo-circle.svg"

const Footer = () => {
  return (
    <SmallGrid columns>
      <Line />
      <Inner id="footer">
        <Container>
          <ColLinks>
            <Heading>Navigate</Heading>
            <a
              href={
                process.env.BASE === "/"
                  ? "/about"
                  : process.env.BASE + "/about"
              }
            >
              About
            </a>
            <a href="/#process">Process</a>
            <a
              href={
                process.env.BASE === "/"
                  ? "/projects"
                  : process.env.BASE + "/projects"
              }
            >
              Projects
            </a>
            <a href="/#skills">Skills</a>
            <a
              href={
                process.env.BASE === "/"
                  ? "/contact"
                  : process.env.BASE + "/contact"
              }
            >
              Contact
            </a>
          </ColLinks>
          <ColLinks>
            <Heading>Social</Heading>
            <a href="https://github.com/andrapetronela" target="_blank">
              Github
            </a>
            <a
              href="https://www.instagram.com/andrastrachinaru/"
              target="_blank"
            >
              Instagram
            </a>
            <a href="https://twitter.com/andraStrc" target="_blank">
              Twitter
            </a>
            <a
              href="https://uk.linkedin.com/in/andra-strachinaru/en-us"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://www.behance.net/andra-strachinaru" target="_blank">
              Behance
            </a>
          </ColLinks>
          <ColLogo>
            <Circle
              src={circle}
              alt="Building memorable experiences with a designer eye"
              className="tween"
            />

            <Logo src={a} alt="Andra" />
          </ColLogo>
        </Container>
        <p className="legal">
          Designed & developed by Andra - {new Date().getFullYear()}
        </p>
      </Inner>
    </SmallGrid>
  )
}

export default Footer

const Inner = styled.div`
  padding: 15rem 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .legal {
    margin: 10rem auto 0;
  }
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 16px;
  background: ${theme.text.main};
`

const Container = styled.section`
  width: 100%;
  max-width: 92rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  & a,
  & a:link,
  & a:visited {
    margin-bottom: 1rem;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${theme.text.main};
    &::selection {
      color: #aa857f;
    }
  }

  & a::after {
    position: absolute;
    content: " ";
    height: 2px;
    width: 0%;
    bottom: -1px;
    left: 0;
    background: ${theme.text.main};
    transition: ease-out 0.3s;
    margin: 0 auto;
    border-radius: 16px;
  }
  & a:hover::after,
  & a:active::after,
  & a:focus::after {
    width: 100%;
  }
`

const ColLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 5rem;
`

const Heading = styled.p`
  font-weight: bold;
  margin-bottom: 2rem;
`
const ColLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: auto;
  width: 120px;
  height: 120px;
  margin-right: 5px;
`

const Circle = styled.img`
  width: 100%;
  animation: rotateFooterLogo 20s linear infinite reverse;
  &::selection {
    color: white;
  }
`

const Logo = styled.img`
  width: 35%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
