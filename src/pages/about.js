import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio displayAboutMe={false} />
        <h3> About Me </h3>
        <p>
            I am a passionate full stack Javascript/Node.js developer with more than 5 years professional experience. I like writing reusable, well tested and documented code and I like using modular approach to develop both frontend and backend web applications (You could find out more about my open source modules here)

            I live in Brisbane Australia and I am currently working at Allocated Bullion Exchange (ABX). We have been busy building an exciting new bullion exchange platform to facilitate people to buy/sell physical precious metals (not paper contracts, i.e. paper gold) across the world in real time. I really enjoy myself since financial trading (I also buy shares) is the business domain I am interested in and I could work on a variety of tasks - they are not only challenging, but also range from frontend, backend, devOps deployment and cloudify applications with Docker and AWS.
        </p>
      </Layout>
    )
  }
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
