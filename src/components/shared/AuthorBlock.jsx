
import React from 'react'
import { Link } from 'gatsby'

const AuthorBlock = ({ subtitle, imgPath, linkTo }) => (
  <div>
    <Link to={linkTo}>
      <img
        src={imgPath}
        className="sidebar__author-photo"
        width="175"
        height="175"
        alt="nicopixel Fullstack Remote Developer"
      />
    </Link>
    <p>{subtitle}</p>
  </div>
)

export default AuthorBlock
