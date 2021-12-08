import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import BooksSummary from '../components/BooksSummary'
import Sidebar from '../components/Sidebar'

const BooksTemplate = ({ data: { markdownRemark } }) => {
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
            <div className="books">
              <h1 className="book__title">
                {markdownRemark.frontmatter.title}
              </h1>
              <div
                className="book__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
              />
            </div>
            <BooksSummary />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BooksTemplate

export const pageQuery = graphql`
  query GetAllBooks($slug: String!) {
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
