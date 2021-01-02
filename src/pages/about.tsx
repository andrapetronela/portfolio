import React from "react"
import { Link } from "gatsby"
import TrackVisibility from "react-on-screen"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/Navigation/Navigation"
import HomepageHeader from "../components/Header/HomepageHeader"
import Hello from "../components/Hello/Hello"
import Description from "../components/Description/Description"
import Passions from "../components/Description/Passions"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Navigation />
    <Hello />
    <TrackVisibility offset={400}>
      <Description />
    </TrackVisibility>
    <TrackVisibility offset={600}>
      <Passions />
    </TrackVisibility>
    <HomepageHeader />
    <HomepageHeader />
  </Layout>
)

export default AboutPage
