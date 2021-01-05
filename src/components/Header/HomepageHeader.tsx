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
import img31 from "../../images/bridge/31.jpg"
import img32 from "../../images/bridge/32.jpg"
const HomepageHeader = () => {
  return (
    <MainGrid>
      <Container>
        <Col>
          <h1>Bridge the gap between design & development</h1>
        </Col>
        <ColAnim>
          <Row src={img32} alt="Bridge wood illustration" />
          <Row src={img31} alt="Bridge wood illustration" />
          <Row src={img30} alt="Bridge wood illustration" />
          <Row src={img29} alt="Bridge wood illustration" />
          <Row src={img28} alt="Bridge wood illustration" />
          <Row src={img27} alt="Bridge wood illustration" />
          <Row src={img26} alt="Bridge wood illustration" />
          <Row src={img25} alt="Bridge wood illustration" />
          <Row src={img24} alt="Bridge wood illustration" />
          <Row src={img23} alt="Bridge wood illustration" />
          <Row src={img22} alt="Bridge wood illustration" />
          <Row src={img21} alt="Bridge wood illustration" />
          <Row src={img20} alt="Bridge wood illustration" />
          <Row src={img19} alt="Bridge wood illustration" />
          <Row src={img18} alt="Bridge wood illustration" />
          <Row src={img17} alt="Bridge wood illustration" />
          <Row src={img16} alt="Bridge wood illustration" />
          <Row src={img15} alt="Bridge wood illustration" />
          <Row src={img14} alt="Bridge wood illustration" />
          <Row src={img13} alt="Bridge wood illustration" />
          <Row src={img12} alt="Bridge wood illustration" />
          <Row src={img11} alt="Bridge wood illustration" />
          <Row src={img10} alt="Bridge wood illustration" />
          <Row src={img9} alt="Bridge wood illustration" />
          <Row src={img8} alt="Bridge wood illustration" />
          <Row src={img7} alt="Bridge wood illustration" />
          <Row src={img6} alt="Bridge wood illustration" />
          <Row src={img5} alt="Bridge wood illustration" />
          <Row src={img4} alt="Bridge wood illustration" />
          <Row src={img3} alt="Bridge wood illustration" />
          <Row src={img2} alt="Bridge wood illustration" />
          <Row src={img1} alt="Bridge wood illustration" />
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
  & h1 {
    letter-spacing: 1.5px;

    &::selection {
      color: ${theme.accent};
    }
  }
  @media (min-width: 1024px) {
    width: 70%;
    margin-left: 10rem;
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
  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 40%;
  }
`

const Row = styled.img``
