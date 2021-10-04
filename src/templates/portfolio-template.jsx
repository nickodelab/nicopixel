import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import ProjectsSummary from '../components/ProjectsSummary'
import Sidebar from '../components/Sidebar'

const PortfolioTemplate = ({ data: { markdownRemark } }) => {
  const {
    title: pageTitle,
    description: pageDescription,
  } = markdownRemark.frontmatter

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div>
        <Sidebar />
        <div className="content">
          <div className="content__inner">
            <div className="projects">
              <h1 className="projects__title">
                {markdownRemark.frontmatter.title}
              </h1>
              <div
                className="project__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
              />
            </div>
            <ProjectsSummary />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query GetAllProjects($slug: String!) {
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
