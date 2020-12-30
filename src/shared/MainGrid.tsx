import React from "react"
import styled from "styled-components"

const MainGrid = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MainGrid 

const Container = styled.div``