/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            mail
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        alignItems: `center`,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ margin: 0 }}>
        Hi I'm <a href={`https://twitter.com/${social.twitter}`}>{author}</a>, I make cool stuff!
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {` `}
        <a href={`https://github.com/${social.github}`}>
          Github
        </a>
        {` `}
        <a href={`mailto:${social.mail}`}>
          {social.mail}
        </a>
      </p>
    </div>
  )
}

export default Bio
