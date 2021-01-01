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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <HomepageHeader />
    <Hello />
    <TrackVisibility offset={400}>
      <Description />
    </TrackVisibility>
    <TrackVisibility offset={600}>
      <Passions />
    </TrackVisibility>
    <HomepageHeader />
    <HomepageHeader />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
