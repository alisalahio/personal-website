import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Projects from "../components/projects"
import Posts from "../components/posts"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="My projects & posts" />
        <Bio />
        <Projects />
        <Posts />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
