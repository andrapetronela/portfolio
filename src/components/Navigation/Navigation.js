import React from "react"
import styled from "styled-components"
import logo from "../../images/gatsby-icon.png"
import theme from "../../shared/theme"

const Navigation = () => {
  return (
    <Container>
      <Sticky>
        <Logo src={logo} alt="Logo - Andra" />
        <Menu>
          <Line />
          <Line />
        </Menu>
      </Sticky>
    </Container>
  )
}

export default Navigation

const Container = styled.div``

const Sticky = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

const Logo = styled.img``

const Menu = styled.div``

const Line = styled.div``
