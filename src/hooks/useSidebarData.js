import { useStaticQuery, graphql } from 'gatsby'

export const useSidebarData = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
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
      }
    `
  )
  return site.siteMetadata
}
