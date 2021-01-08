import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsHeader from "../components/Header/ProjectsHeader"
import ContactBanner from "../components/ContactBanner/ContactBanner"
import ProjectsGrid from "../components/Grids/ProjectsGrid"
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
const Projects = () => (
  <Layout activeLink="projects">
    <SEO title="Projects" />
    <ProjectsHeader title="Projects" />
    <ProjectsGrid data={projectsGridData} noButton />
    <ContactBanner nobackground primaryBtn />
  </Layout>
)

export default Projects
