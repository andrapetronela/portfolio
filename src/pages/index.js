import React from "react"
import TrackVisibility from "react-on-screen"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageHeader from "../components/Header/HomepageHeader"
import Hello from "../components/Hello/HelloReveal"
import Description from "../components/Description/Description"
import ProcessAnimation from "../components/Process/ProcessAnimation"
import Passions from "../components/Description/Passions"
import HpGridProjects from "../components/Grids/HpGridProjects"
import ContactBanner from "../components/ContactBanner/ContactBanner"
import Tools from "../components/Tools/Tools"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomepageHeader />
    <TrackVisibility offset={400}>
      <Hello />
    </TrackVisibility>
    <TrackVisibility offset={400}>
      <Description />
    </TrackVisibility>
    <ProcessAnimation />
    <TrackVisibility offset={600}>
      <Passions />
    </TrackVisibility>
    <HpGridProjects />
    <ContactBanner />
    <TrackVisibility offset={800}>
      <Tools />
    </TrackVisibility>
  </Layout>
)

export default IndexPage
