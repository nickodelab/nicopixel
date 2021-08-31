import React from 'react'
import { Link } from 'gatsby'

import Menu from '../Menu'
import Links from '../Links'
import AuthorBlock from '../shared/AuthorBlock'
import { useSidebarData } from '../../hooks/useSidebarData'

import './style.scss'

const Sidebar = () => {
  const { author, subtitle, menu } = useSidebarData()

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <AuthorBlock subtitle={subtitle} />
        <div>
          <Menu data={menu} />
          <Links author={author} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
