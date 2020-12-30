import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.svg"
import MainGrid from "../../shared/MainGrid"
import theme from "../../shared/theme"
import line from "../../images/line-menu.svg"

const Navigation = () => {
  return (
    <MainGrid>
      <Container>
        <Sticky id="navbar">
          <Logo src={logo} alt="Logo - Andra" />
          <Menu>
            <Line src={line} />
            <Line src={line} second />
          </Menu>
        </Sticky>
      </Container>
    </MainGrid>
  )
}

export default Navigation

const Container = styled.div`
  position: relative;
  margin-bottom: 60px;
`

const Sticky = styled.div`
  background: ${theme.background.light};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`

const Logo = styled.img``

const Menu = styled.div`
  background: red;
`

const Line = styled.img`
  display: block;
  ${props => props.second && "margin-top: 8px;"}
`
