import React, { useState } from "react"
import styled from "styled-components"
import logo from "../../images/logo.svg"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import line from "../../images/line-menu.svg"

const Navigation = () => {
  const [menuOpen, openMenu] = useState(false)
  return (
    <Container>
      <MainGrid>
        <Sticky>
          <MainGrid>
            <Inner>
              <a href="/">
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
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="process" className="menu-item">
            Process
          </a>
          <a id="skills" className="menu-item">
            Skills
          </a>
          <a id="projects" className="menu-item" href="/projects">
            Projects
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </BurgerMenu>

        <TopNav>
          <TopNavInner open={menuOpen}>
            <a id="about" className="top-item" href="/about">
              About
            </a>
            <a id="process" className="top-item">
              Process
            </a>
            <a id="skills" className="top-item">
              Skills
            </a>
            <a id="projects" className="top-item" href="/projects">
              Projects
            </a>
            <a id="contact" className="top-item" href="/contact">
              Contact
            </a>
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

const Sticky = styled.div`
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
  &::selection {
    color: #aa857f;
  }
`

const Menu = styled.div`
  cursor: pointer;
`

const Line = styled.img`
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

const BurgerMenu = styled.div`
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

  & .menu-item,
  .menu-item:link,
  .menu-item:visited {
    font-size: 8rem;
    line-height: 9.6rem;
    font-weight: bold;
    color: ${theme.text.main};
    margin-bottom: 14px;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    &::selection {
      color: #aa857f;
    }
  }

  & .menu-item::after {
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
  }
  & .menu-item:hover::after,
  & .menu-item:active::after,
  & .menu-item:focus::after {
    width: 100%;
  }
`
const TopNav = styled.div`
  width: 70rem;
  position: absolute;
  top: 35px;
  margin: 0 auto;
`
const TopNavInner = styled.div`
  justify-content: flex-end;
  display: none;

  @media (min-width: 1024px) {
    display: ${props => (props.open ? "none" : "flex")};
  }
  & .top-item,
  & .top-item:link,
  & .top-item:visited {
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

  & .top-item::after {
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
  & .top-item:hover::after,
  & .top-item:active::after,
  & .top-item:focus::after {
    width: 100%;
  }
`
