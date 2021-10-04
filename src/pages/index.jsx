import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

const IndexRoute = props => {
  const items = []
  const { title, subtitle } = props.data.site.siteMetadata
  const posts = props.data.allMarkdownRemark.edges
  posts.forEach(post => {
    items.push(<Post data={post} key={post.node.fields.slug} />)
  })

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar />
        <div className="content">
          <div className="content__inner">{items}</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          github
          email
          linkedin
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
