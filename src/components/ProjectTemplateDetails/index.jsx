import React from 'react'

import './style.scss'

const ProjectTemplateDetails = props => {
  const page = props.data.markdownRemark

  return (
    <div className="content">
      <div className="content__inner">
        <div className="project">
          <h1 className="project__title">{page.frontmatter.title}</h1>
          <div
            className="project__body"
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectTemplateDetails
