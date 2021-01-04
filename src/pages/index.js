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
import ProcessAnimation from "../components/Process/ProcessAnimation"
import Passions from "../components/Description/Passions"
import HpGridProjects from "../components/Grids/HpGridProjects"
import ContactBanner from "../components/ContactBanner/ContactBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <HomepageHeader />
    <Hello />
    <TrackVisibility offset={400}>
      <Description />
    </TrackVisibility>
    <ProcessAnimation />
    <TrackVisibility offset={600}>
      <Passions />
    </TrackVisibility>
    <HpGridProjects />
    <ContactBanner />
  </Layout>
)

export default IndexPage
