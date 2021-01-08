import React from "react"
import { Link } from "gatsby"
import TrackVisibility from "react-on-screen"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/Header/AboutHeader"
import ContactBanner from "../components/ContactBanner/ContactBanner"
import DescAbout from "../components/Description/DescriptionAbout"
import DescPassions from "../components/Description/DescPassions"
import HpGridProjects from "../components/Grids/HpGridProjects"
import img1 from "../images/projects/movie-poster.png"
import img2 from "../images/projects/pet-logo.jpg"
import img3 from "../images/projects/calculator.png"
import img4 from "../images/projects/poster-design.jpg"
import img5 from "../images/projects/second-life.png"
import img6 from "../images/projects/magazine.jpg"
import img7 from "../images/projects/war.jpg"
import img8 from "../images/projects/bird.png"
import img9 from "../images/projects/glitch.png"

const projectsGridData = [
  { img: img4, alt: "Alt change" },
  { img: img9, alt: "Alt change" },
  { img: img6, alt: "Alt change" },
  { img: img3, alt: "Alt change" },
  { img: img8, alt: "Alt change" },
  { img: img5, alt: "Alt change" },
  { img: img2, alt: "Alt change" },
  { img: img7, alt: "Alt change" },
  { img: img1, alt: "Alt change" },
]
const AboutPage = () => (
  <Layout activeLink="about">
    <SEO title="About" />
    <AboutHeader title="About" animation="rotateY" />
    <DescAbout />
    <DescPassions />
    <HpGridProjects data={projectsGridData} />
    <ContactBanner nobackground primaryBtn />
  </Layout>
)

export default AboutPage
