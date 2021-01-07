import React from "react"
import { Link } from "gatsby"
import TrackVisibility from "react-on-screen"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/Header/AboutHeader"
import ContactBanner from "../components/ContactBanner/ContactBanner"
import DescAbout from "../components/Description/DescriptionAbout"
import DescPassions from "../components/Description/DescPassions"

const AboutPage = () => (
  <Layout activeLink="about">
    <SEO title="About" />
    <AboutHeader />
    <DescAbout />
    <DescPassions />
    <ContactBanner nobackground primaryBtn />
  </Layout>
)

export default AboutPage
