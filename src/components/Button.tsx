import React, { FunctionComponent } from "react"
import styled from "styled-components"
import theme from "../shared/theme"

interface IButton {
  text: string
  color?: string
  colorHover?: string
  marginTop: string
  href: string
  contact?: boolean
}

const Button: FunctionComponent<IButton> = ({
  text,
  color,
  colorHover,
  marginTop,
  href,
  contact,
}) => {
  return (
    <Wrapper
      color={color}
      colorHover={colorHover}
      marginTop={marginTop}
      href={
        contact
          ? "mailto:ap.strachinaru@gmail.com"
          : process.env.BASE === "/"
          ? href
          : process.env.BASE + href
      }
    >
      {text}
    </Wrapper>
  )
}

export default Button

interface IWrapper {
  color?: string
  colorHover?: string
  marginTop: string
}
const Wrapper = styled.a<IWrapper>`
  &,
  &:link,
  &:visited {
    z-index: 1;
    width: 100%;
    max-width: 40rem;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-top: ${props => props.marginTop};
    text-decoration: none;
    color: ${props => (props.color ? props.color : theme.text.main)};
    border-bottom: 1px solid
      ${props => (props.color ? props.color : theme.text.main)};
    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: inherit;
      z-index: -1;
    }

    &:before,
    &:after {
      top: 0;
      width: 0;
      height: 100%;
    }

    &:after {
      top: 1px;
    }

    &:before {
      left: 0;
      border-top: 1px solid
        ${props => (props.color ? props.color : theme.text.main)};
      border-left: 0;
      border-right: 0;
    }

    &:after {
      right: 0;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
      line-height: 26px;
      height: 50px;
      max-width: 30rem;
    }
  }

  &:hover {
    color: ${props =>
      props.colorHover ? props.colorHover : theme.text.second};
    transition-delay: 0.5s;
  }
  &:hover:before {
    transition-delay: 0s;
  }
  &:hover:after {
    background: ${props => (props.color ? props.color : theme.text.main)};
    transition-delay: 0.35s;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
  }
`
