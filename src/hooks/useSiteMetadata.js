import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )
  return siteMetadata
}
