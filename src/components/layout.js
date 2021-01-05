/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Footer from "./Footer/Footer"
import Navigation from "./Navigation/Navigation"

const Layout = ({ children, activeLink }) => {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/gsn7exd.css" />
      <link rel="stylesheet" href="https://use.typekit.net/gsn7exd.css" />

      <div>
        <Navigation activeLink={activeLink} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
