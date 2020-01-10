import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";

import { DESKTOP_MIN_WIDTH, media } from "../shared/style"

require(`katex/dist/katex.min.css`)

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark

  return <Layout>
    <SEO title={`Blog - ${frontmatter.title}`}/>
    <h1>{frontmatter.title}</h1>
    <b>{frontmatter.date}</b>
    <div css={{
          display: "none",
          [media(DESKTOP_MIN_WIDTH)]: {
            fontSize: "0.8em",
            background: "white",
            display: "block",
            position: "fixed",
            top: "20%",
            left: "calc(50% + 500px)",
            borderLeft: "2px solid black",
            padding: "10px",
            maxWidth: "400px",
            listStyle: "none",
            "& li":{
              lineHeight: "1.2em",
              listStyle: "none",
              marginBottom: "5px",
              "& p": {
                marginBottom: 0,
              }
            },
            "& ul": {
              marginLeft: 10,
              marginTop: 0,
            }
          }
     }}
    >
      <b>{frontmatter.title}</b>
      <div dangerouslySetInnerHTML={{__html: tableOfContents}}/>
    </div>
    <div
      css={{marginTop: "50px"}}
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Layout>
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(
        absolute: false 
        pathToSlugField: "frontmatter.path"
        maxDepth: 3
      )
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      headings {
        value
        depth
      }
    }
  }
`