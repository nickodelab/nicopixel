import { useStaticQuery, graphql } from 'gatsby'

export const useProjectsData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { layout: { eq: "project" }, draft: { ne: true } }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                category
                description
                tags
                layout
              }
              html
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}
