import React from "react"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"

const CookieBar = () => {
  return (
    <CookieConsent
      style={{
        background: " #1A1312",
        padding: "1rem 3%",
      }}
      buttonStyle={{
        background: "#e9c255",
        color: "#1A1312",
        fontWeight: "bolder",
        fontFamily: "Poppins",
        padding: "1rem 3rem",
      }}
    >
      <p style={{ color: "white" }}>
        This website uses cookies to enhance the user experience.
      </p>
    </CookieConsent>
  )
}
export default CookieBar
