import React, { useState } from "react"
import styled from "styled-components"
import logo from "../../images/logo.svg"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import line from "../../images/line-menu.svg"

interface INav {
  activeLink: string
}
const Navigation = ({ activeLink }: INav) => {
  const [menuOpen, openMenu] = useState(false)
  console.log(activeLink)
  return (
    <Container>
      <MainGrid>
        <Sticky open={menuOpen}>
          <MainGrid>
            <Inner>
              <a href={process.env.BASE}>
                <Logo src={logo} alt="Logo - Andra" />
              </a>
              <Menu onClick={() => openMenu(!menuOpen)}>
                <Line src={line} open={menuOpen} />
                <LineSecond src={line} open={menuOpen} />
              </Menu>
            </Inner>
          </MainGrid>
        </Sticky>
        <BurgerMenu open={menuOpen}>
          <BurgerLink
            href={
              process.env.BASE === "/" ? "/about" : process.env.BASE + "/about"
            }
            className="menu-item"
            activeLink={activeLink === "about"}
          >
            About
          </BurgerLink>
          <BurgerLink
            href={process.env.BASE + "#process"}
            className="menu-item"
            onClick={() => openMenu(!menuOpen)}
          >
            Process
          </BurgerLink>
          <BurgerLink
            href={process.env.BASE + "#skills"}
            className="menu-item"
            onClick={() => openMenu(!menuOpen)}
          >
            Skills
          </BurgerLink>
          <BurgerLink
            href={
              process.env.BASE === "/"
                ? "/projects"
                : process.env.BASE + "/projects"
            }
            className="menu-item"
          >
            Projects
          </BurgerLink>
          <BurgerLink
            href={
              process.env.BASE === "/"
                ? "/contact"
                : process.env.BASE + "/contact"
            }
            className="menu-item"
          >
            Contact
          </BurgerLink>
        </BurgerMenu>

        <TopNav>
          <TopNavInner open={menuOpen}>
            <TopLink
              href={
                process.env.BASE === "/"
                  ? "/about"
                  : process.env.BASE + "/about"
              }
              className="top-item"
              activeLink={activeLink === "about"}
            >
              About
            </TopLink>
            <TopLink href={process.env.BASE + "#process"} className="top-item">
              Process
            </TopLink>
            <TopLink href={process.env.BASE + "#skills"} className="top-item">
              Skills
            </TopLink>
            <TopLink
              href={
                process.env.BASE === "/"
                  ? "/projects"
                  : process.env.BASE + "/projects"
              }
              className="top-item"
              activeLink={activeLink === "projects"}
            >
              Projects
            </TopLink>
            <TopLink
              href={
                process.env.BASE === "/"
                  ? "/contact"
                  : process.env.BASE + "/contact"
              }
              className="top-item"
              activeLink={activeLink === "contact"}
            >
              Contact
            </TopLink>
          </TopNavInner>
        </TopNav>
      </MainGrid>
    </Container>
  )
}

export default Navigation

const Container = styled.div`
  position: relative;
  margin-bottom: 85px;
`
interface ISticky {
  open?: boolean
}
const Sticky = styled.div<ISticky>`
  border-bottom: ${props =>
    props.open ? "none" : `1px solid ${theme.text.second}`};
  background: ${theme.background.light};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`
const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
  height: 35px;
  &::selection {
    color: #aa857f;
  }
`

const Menu = styled.div`
  cursor: pointer;
`

const Line = styled.img<ISticky>`
  transform-origin: center center;
  transition: all 0.5s ease 0s;
  user-select: none;
  transform: ${props =>
    props.open
      ? "translate3d(35px, 10px, 0px) rotate(45deg)"
      : "translate3d(25px, 5px, 0px) rotate(0deg);"};
`

const LineSecond = styled(Line)`
  transform: ${props =>
    props.open
      ? "translate3d(-8px, 10px, 0px) rotate(-45deg);"
      : "translate3d(0px, 15px, 0px) rotate(0deg);"};
`

const BurgerMenu = styled.div<ISticky>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 10rem;
  top: ${props => (props.open ? "60px" : "-100vh")};
  background-color: ${theme.background.light};
  z-index: 8;
  transition: top 1.2s cubic-bezier(0.25, 1, 0.5, 1);
  overflow-y: scroll;
  padding-bottom: 15rem;
`

interface ITopNav {
  activeLink?: boolean
  open?: boolean
}

const BurgerLink = styled.a<ITopNav>`
  &,
  :link,
  :visited {
    font-size: 8rem;
    line-height: 9.6rem;
    color: ${theme.text.main};
    margin-bottom: 14px;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    &::selection {
      color: #aa857f;
    }
  }

  &::after {
    position: absolute;
    content: " ";
    height: 4px;
    width: 0%;
    bottom: -1px;
    left: 0;
    background: ${theme.text.main};
    transition: ease-out 0.5s;
    margin: 0 auto;
    border-radius: 16px;
    width: ${props => (props.activeLink ? "100%" : "0%")};
  }
  &:hover::after,
  &:active::after,
  &:focus::after {
    width: 100%;
  }
`

const TopNav = styled.div<ITopNav>`
  width: 70%;
  max-width: 1000px;
  position: absolute;
  top: 35px;
  margin: 0 auto;
`
const TopNavInner = styled.div<ISticky>`
  justify-content: flex-end;
  display: none;

  @media (min-width: 1024px) {
    display: ${props => (props.open ? "none" : "flex")};
  }
`
const TopLink = styled.a<ITopNav>`
  &,
  &:link,
  &:visited {
    z-index: 40;
    margin-right: 3rem;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: ${theme.text.main};
    &::selection {
      color: #aa857f;
    }
  }

  &::after {
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
    width: ${props => (props.activeLink ? "100%" : "0%")};
  }
  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`
