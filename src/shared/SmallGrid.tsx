import React from "react"
import styled from "styled-components"

interface IGrid {
  left?: boolean
  children: any
  columns?: boolean
}

const SmallGrid = ({ children, left, columns }: IGrid) => {
  return (
    <Container left={left} columns={columns}>
      {children}
    </Container>
  )
}

export default SmallGrid

interface ICont {
  left?: boolean
  columns?: boolean
}
const Container = styled.div<ICont>`
  display: flex;
  justify-content: ${props => (props.left ? "flex-start" : "center")};
  flex-direction: ${props => props.columns && "column"};
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    padding: 0 3%;
  }
  @media (min-width: 1200px) {
    width: 90%;
  }
`
