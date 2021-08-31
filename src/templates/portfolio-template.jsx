import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectTemplateDetails from '../components/ProjectTemplateDetails'
import Sidebar from '../components/Sidebar'

const PortfolioTemplate = props => {
  const { title, subtitle } = props.data.site.siteMetadata
  const page = props.data.markdownRemark
  const { title: pageTitle, description: pageDescription } = page.frontmatter
  const description = pageDescription !== null ? pageDescription : subtitle

  return (
    <Layout pageTitle={pageTitle} title={title} description={description}>
      <div>
        <Sidebar />
        <ProjectTemplateDetails {...props} />
      </div>
    </Layout>
  )
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query GetAllProjects($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
