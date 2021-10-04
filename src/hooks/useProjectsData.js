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
              frontmatter {
                title
                tags
                github
                live
                type
                excerpt
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}
