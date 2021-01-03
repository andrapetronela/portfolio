import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"

const HomepageHeader = () => {
  return (
    <MainGrid>
      <Container>
        <Col>
          <h1>
            Bridge the gap between <span>design</span> &mdash;{" "}
            <span>development</span>
          </h1>
          <h2>Create memorable user experiences.</h2>
        </Col>
        <ColAnim>
          <Wall />
          <CenterWrapper>
            <BricksWrapper>
              <Row>
                <BrickMask timing="8s" delay=".5s">
                  <Brick /> <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="7s" delay="1s">
                  <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="9s" delay="2.5s">
                  <Brick /> <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="7s" delay="0.8s">
                  <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="8s" delay="1.4s">
                  <Brick /> <Brick />
                </BrickMask>
              </Row>
            </BricksWrapper>
            <BricksWrapper2>
              <Row>
                <BrickMask timing="9s" delay="1.7s" right>
                  <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="7s" delay="2.2s" right>
                  <Brick /> <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="8s" delay=".6s" right>
                  <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="7s" delay="1.2s" right>
                  <Brick /> <Brick />
                </BrickMask>
              </Row>
              <Row>
                <BrickMask timing="9s" delay="4s" right>
                  <Brick />
                </BrickMask>
              </Row>
            </BricksWrapper2>
          </CenterWrapper>
          <Wall right />
        </ColAnim>
      </Container>
    </MainGrid>
  )
}

export default HomepageHeader

const Container = styled.div`
  width: 100%;
  padding: 8rem 0 25rem;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  & span {
    background: ${theme.text.main};
    color: ${theme.background.light};
    padding: 0 1rem;
    @media (max-width: 1024px) {
      padding: 0 0.5rem;
    }

    &::selection {
      color: #aa857f;
    }
  }
`
const Col = styled.div`
  @media (min-width: 1024px) {
    width: 45%;
  }
`

const ColAnim = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2px;
  height: 50rem;
  width: 100%;
  margin-bottom: 5rem;
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 50%;
  }
`
interface IWall {
  right?: boolean
}
const Wall = styled.div<IWall>`
  height: 95%;
  width: 8px;
  border-radius: 18px;
  background: #cfd9de;
  opacity: 0.2;
  margin-left: ${props => props.right && "auto"};
`

const CenterWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`

const BricksWrapper = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const BricksWrapper2 = styled(BricksWrapper)``

const Row = styled.div`
  width: 100%;
  display: flex;
`
interface IBrick {
  right?: boolean
  timing: string
  delay?: string
}
const BrickMask = styled.div<IBrick>`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 4px;
  opacity: 0;
  animation: ${props =>
    props.right
      ? `movebrickhp ${
          props.timing && props.timing
        } cubic-bezier(0.5, 0, 0.75, 0) reverse forwards infinite ${
          props.delay && props.delay
        }`
      : `movebrickhp ${
          props.timing && props.timing
        }  cubic-bezier(0.25, 1, 0.5, 1) forwards infinite ${
          props.delay && props.delay
        }`};
`

const Brick = styled.div`
  width: 33%;
  height: 4px;
  border-radius: 100px;
  background: ${theme.accent};
`
