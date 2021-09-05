import React from 'react'

import { useProjectsData } from '../../hooks/useProjectsData'
import './style.scss'

const ProjectsSummary = props => {
  const projects = useProjectsData()

  console.log('projectsData', projects)

  return projects.map(({ node: { html, frontmatter: { title } } }, index) => (
    <div className="project" key={index}>
      <h2 className="project__title">{title}</h2>
      <div
        className="project__body"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  ))
}

export default ProjectsSummary
