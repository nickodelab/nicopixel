import React from 'react'
import { Link } from 'gatsby'

import logoPath from '../../assets/img/nicopixel.png'

const AuthorBlock = ({ subtitle }) => {
  return (
    <div className="sidebar__author">
      <div>
        <Link to="/">
          <img
            src={logoPath}
            className="sidebar__author-photo"
            width="140"
            height="140"
            alt="nicopixel - Software Development Engineer"
          />
        </Link>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default AuthorBlock
