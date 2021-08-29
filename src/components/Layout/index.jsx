import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

const Layout = ({ children, pageTitle, title, description }) => (
  <div className="layout">
    <Helmet>
      <title>{`${pageTitle} - ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
)

export default Layout
