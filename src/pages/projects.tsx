import React from "react"
import { Link } from "gatsby"
import TrackVisibility from "react-on-screen"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutHeader from "../components/Header/AboutHeader"
import ContactBanner from "../components/ContactBanner/ContactBanner"

const Projects = () => (
  <Layout activeLink="projects">
    <SEO title="Projects" />
    <AboutHeader />
    <ContactBanner nobackground primaryBtn />
  </Layout>
)

export default Projects
