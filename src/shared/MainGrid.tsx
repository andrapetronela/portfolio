import React from "react"
import styled from "styled-components"

interface IGrid {
  left?: boolean
  children: any
}

const MainGrid = ({ children, left }: IGrid) => {
  return <Container left={left}>{children}</Container>
}

export default MainGrid

interface ICont {
  left?: boolean
}
const Container = styled.div<ICont>`
  display: flex;
  justify-content: ${props => (props.left ? "flex-start" : "center")};
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 0 3%;
  }
  @media (min-width: 1200px) {
    width: 90%;
  }
`
