/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"
import theme from "../shared/theme"

const Layout = ({ children }) => {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/gsn7exd.css" />

      <div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
