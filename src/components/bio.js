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
      avatar: file(absolutePath: { regex: "/memoji.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
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
        flexDirection: `column`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginLeft: -16,
          marginBottom: rhythm(2/3),
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ margin: 0 }}>
        Hi I'm {author}, I create cool internet stuff.
        <br />
        You can find me on
        {` `}
        <a rel="me" style={{ fontWeight: 900, boxShadow: 'none' }} href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {`, `}
        <a rel="me" style={{ fontWeight: 900, boxShadow: 'none' }} href={`https://github.com/${social.github}`}>
          Github
        </a>
        {` or email me `}
        <a rel="me" style={{ fontWeight: 900, boxShadow: 'none' }} href={`mailto:${social.mail}`}>
          {social.mail}
        </a>.
      </p>
    </div>
  )
}

export default Bio
