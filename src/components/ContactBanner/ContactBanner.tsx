import React from "react"
import styled from "styled-components"
import theme from "../../shared/theme"
import Button from "../Button"

const ContactBanner = () => {
  return (
    <Container>
      <Inner>
        <h4>
          Do you have a business opportunity, or are you just a creative looking
          to collaborate?
        </h4>
        <Button
          href="/contact"
          text="Get in touch"
          marginTop="0"
          color={theme.text.second}
          colorHover={theme.text.main}
        />
      </Inner>
    </Container>
  )
}

export default ContactBanner

const Container = styled.div`
  width: 100%;
  background: ${theme.text.main};
  background: linear-gradient(to right, #1a1312 70%, rgba(55, 37, 31, 0.4));
  background-size: 200%;
  animation: animateGradient 10s infinite alternate-reverse forwards;
  color: ${theme.text.second};
`
const Inner = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  padding: 14rem 20px;

  & h4 {
    margin-bottom: 20px;
    @media (min-width: 768px) {
      margin-bottom: 0px;
      width: 60%;
    }
  }

  & a {
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
`
