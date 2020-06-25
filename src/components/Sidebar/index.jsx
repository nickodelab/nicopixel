
import React from 'react'

import Menu from '../Menu'
import Links from '../Links'

import AuthorBlock from '../shared/AuthorBlock'
import profilePic from '../../assets/img/remote-fullstack-developer-nicopixel.jpeg'
import './style.scss'

const Sidebar = props => {
  const { author, subtitle, menu } = props.data.site.siteMetadata

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__author">
          <AuthorBlock
            author={author}
            subtitle={subtitle}
            imgPath={profilePic}
            linkTo="/"
            variant="square"
          />
        </div>
        <div>
          <Menu data={menu} />
          <Links author={author} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
