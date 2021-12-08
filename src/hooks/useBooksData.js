import { useStaticQuery, graphql } from 'gatsby'

export const useBooksData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { layout: { eq: "book" }, draft: { ne: true } }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                tags
                amazonurl
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
