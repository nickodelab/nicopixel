import React from 'react'

import { useProjectsData } from '../../hooks/useProjectsData'
import Project from '../Project'
import './style.scss'

const ProjectsSummary = props => {
  const projects = useProjectsData()

  return projects.map(({ node: { html, frontmatter } }) => (
    <Project {...frontmatter} html={html} />
  ))
}

export default ProjectsSummary
