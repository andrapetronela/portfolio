import React from "react"
import MainGrid from "../../shared/MainGrid"
import styled from "styled-components"
import theme from "../../shared/theme"
import img1 from "../../images/bridge/1.jpg"
import img2 from "../../images/bridge/2.jpg"
import img3 from "../../images/bridge/3.jpg"
import img4 from "../../images/bridge/4.jpg"
import img5 from "../../images/bridge/5.jpg"
import img6 from "../../images/bridge/6.jpg"
import img7 from "../../images/bridge/7.jpg"
import img8 from "../../images/bridge/8.jpg"
import img9 from "../../images/bridge/9.jpg"
import img10 from "../../images/bridge/10.jpg"
import img11 from "../../images/bridge/11.jpg"
import img12 from "../../images/bridge/12.jpg"
import img13 from "../../images/bridge/13.jpg"
import img14 from "../../images/bridge/14.jpg"
import img15 from "../../images/bridge/15.jpg"
import img16 from "../../images/bridge/16.jpg"
import img17 from "../../images/bridge/17.jpg"
import img18 from "../../images/bridge/18.jpg"
import img19 from "../../images/bridge/19.jpg"
import img20 from "../../images/bridge/20.jpg"
import img21 from "../../images/bridge/21.jpg"
import img22 from "../../images/bridge/22.jpg"
import img23 from "../../images/bridge/23.jpg"
import img24 from "../../images/bridge/24.jpg"
import img25 from "../../images/bridge/25.jpg"
import img26 from "../../images/bridge/26.jpg"
import img27 from "../../images/bridge/27.jpg"
import img28 from "../../images/bridge/28.jpg"
import img29 from "../../images/bridge/29.jpg"
import img30 from "../../images/bridge/30.jpg"
import img31 from "../../images/bridge/32.jpg"
import img32 from "../../images/bridge/31.jpg"
const HomepageHeader = () => {
  return (
    <MainGrid>
      <Container>
        <Col>
          <h1>
            Bridge the gap between <span>design</span> &{" "}
            <span>development</span>
          </h1>
        </Col>
        <ColAnim>
          <Row src={img1} alt="Bridge wood illustration" delay="2.4s" />
          <Row src={img2} alt="Bridge wood illustration" delay="2.3s" />
          <Row src={img3} alt="Bridge wood illustration" delay="2.2s" />

          <Row src={img4} alt="Bridge wood illustration" delay="2.1s" />
          <Row src={img5} alt="Bridge wood illustration" delay="2s" />
          <Row src={img6} alt="Bridge wood illustration" delay="1.9s" />
          <Row src={img7} alt="Bridge wood illustration" delay="1.8s" />
          <Row src={img8} alt="Bridge wood illustration" delay="1.7s" />
          <Row src={img9} alt="Bridge wood illustration" delay="1.6s" />
          <Row src={img10} alt="Bridge wood illustration" delay="1.5s" />
          <Row src={img11} alt="Bridge wood illustration" delay="1.4s" />
          <Row src={img12} alt="Bridge wood illustration" delay="1.3s" />
          <Row src={img13} alt="Bridge wood illustration" delay="1.2s" />
          <Row src={img14} alt="Bridge wood illustration" delay="1.1s" />
          <Row src={img15} alt="Bridge wood illustration" delay="1s" />
          <Row src={img16} alt="Bridge wood illustration" delay="0.9s" />
          <Row src={img17} alt="Bridge wood illustration" delay="0.8s" />
          <Row src={img18} alt="Bridge wood illustration" delay="0.7s" />
          <Row src={img19} alt="Bridge wood illustration" delay="0.6s" />
          <Row src={img20} alt="Bridge wood illustration" delay="0.5s" />
          <Row src={img21} alt="Bridge wood illustration" delay="0.4s" />
          <Row src={img22} alt="Bridge wood illustration" delay="0.3s" />
          <Row src={img23} alt="Bridge wood illustration" delay="0.2s" />
          <Row src={img24} alt="Bridge wood illustration" delay="0.1s" />
          <Ball />

          {/* <Row src={img25} alt="Bridge wood illustration" />
          <Row src={img26} alt="Bridge wood illustration" />
          <Row src={img27} alt="Bridge wood illustration" /> */}
          {/* <Row src={img28} alt="Bridge wood illustration" />
          <Row src={img29} alt="Bridge wood illustration" />
          <Row src={img30} alt="Bridge wood illustration" />
          <Row src={img31} alt="Bridge wood illustration" />
          <Row src={img32} alt="Bridge wood illustration" /> */}
        </ColAnim>
      </Container>
    </MainGrid>
  )
}

export default HomepageHeader

const Container = styled.section`
  width: 100%;
  padding: 8rem 0 25rem;
  position: relative;
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
    font-style: italic;

    &::selection {
      color: ${theme.accent};
    }
  }
`
const Col = styled.div`
  & h1 {
    letter-spacing: 1.5px;

    &::selection {
      color: ${theme.accent};
    }
  }
  @media (min-width: 1024px) {
    width: 60%;
    /* margin-left: 10rem; */
  }
`

const ColAnim = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50rem;
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
  perspective: 1000px;
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 40%;
  }
`
interface IRow {
  delay: string
}
const Row = styled.img<IRow>`
  animation: float 10s ease infinite alternate ${props => props.delay};
  opacity: 0;
`
const Ball = styled.div`
  width: 40px;
  height: 40px;
  background: ${theme.accent};
  border-radius: 100%;
  animation: floatBall 10s ease infinite alternate 0s;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
`
