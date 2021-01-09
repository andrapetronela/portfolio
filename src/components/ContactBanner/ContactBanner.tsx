import React from "react"
import styled from "styled-components"
import theme from "../../shared/theme"
import Button from "../Button"

interface IContact {
  nobackground?: boolean
  primaryBtn?: boolean
  contact?: boolean
}
const ContactBanner = ({ nobackground, primaryBtn, contact }: IContact) => {
  return (
    <Container nobackground={nobackground}>
      <Inner>
        {contact ? (
          <h5> Drop me your message and I will be in touch very shortly.</h5>
        ) : (
          <h5>
            Do you have a business opportunity, or are you just a creative
            looking to collaborate?
          </h5>
        )}
        <Button
          href={contact ? "mailto:ap.strachinaru@gmail.com" : "/contact"}
          text={contact ? "Send a message" : "Get in touch"}
          marginTop="10px"
          color={!primaryBtn && theme.text.second}
          colorHover={!primaryBtn && theme.text.main}
        />
      </Inner>
    </Container>
  )
}

export default ContactBanner

const Container = styled.section<IContact>`
  width: 100%;
  background: ${props => (props.nobackground ? "none" : theme.text.main)};
  color: ${props => (props.nobackground ? theme.text.main : theme.text.second)};
`
const Inner = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  padding: 14rem 20px;

  & h5 {
    margin-bottom: 20px;
    @media (min-width: 768px) {
      margin-bottom: 0px;
      width: 45%;
    }
  }

  & a {
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
`
