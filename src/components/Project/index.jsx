import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import { GitHub as GitHubIcon, Public as PublicIcon } from '@material-ui/icons'

import Badge from '../Badge'
import IconButton from '../shared/IconButton'
import './style.scss'

const Project = ({ tags, title, excerpt, type, live, github }) => (
  <div className="project">
    <div className="project__meta">
      <div className="project__meta-left">
        <div className="project__meta-tags">
          {tags.map(tag => (
            <Badge label={tag} />
          ))}
        </div>
      </div>
      <Badge label={type} isFeatured />
    </div>
    <h2 className="project__title">{title}</h2>
    <p className="project__description">{excerpt}</p>
    <IconButton
      goTo={github}
      size="small"
      label="See on GitHub"
      IconComponent={GitHubIcon}
      external
    />
    <IconButton
      goTo={live}
      size="small"
      label="See live App"
      IconComponent={PublicIcon}
      external
    />
  </div>
)

export default Project
