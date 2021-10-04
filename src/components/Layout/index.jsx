import React from 'react'
import Helmet from 'react-helmet'

import '../../assets/scss/init.scss'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

const Layout = ({ children, pageTitle, pageDescription }) => {
  const { title, subtitle } = useSiteMetadata()

  return (
    <div className="layout">
      <Helmet>
        <title>{`${pageTitle} - ${title}`}</title>
        <meta name="description" content={pageDescription || subtitle} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout
