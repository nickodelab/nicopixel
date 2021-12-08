import React from 'react'
import _ from 'lodash'

import Badge from '../Badge'
import AmazonButton from '../shared/AmazonButton'
import './style.scss'

const Book = ({ tags, title, excerpt, amazonurl, html }) => (
  <div className="book">
    <div className="book__meta">
      <div className="book__meta-left">
        <div className="book__meta-tags">
          {tags.map(tag => (
            <Badge label={tag} />
          ))}
        </div>
      </div>
    </div>
    <h2 className="book__title">{title}</h2>
    <div className="book__content">
      <p className="book__content-description">{excerpt}</p>
      <div
        className="book__content-image"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
    <AmazonButton goTo={amazonurl} label="See price on Amazon" />
  </div>
)

export default Book
