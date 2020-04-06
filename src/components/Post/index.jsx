
import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import _ from 'lodash'
import './style.scss'

class Post extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    // const { slug, categorySlug } = this.props.data.node.fields
    const { slug } = this.props.data.node.fields

    return (
      <div className="post">
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {moment(date).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          {category.map(cat => (
            <span className="post__meta-category" key={`/categories/${_.kebabCase(cat)}/`}>
              <Link to={`/categories/${_.kebabCase(cat)}/`} className="post__meta-category-link">
                {cat}
              </Link>
            </span>
          ))}
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>
          Read
        </Link>
      </div>
    )
  }
}

export default Post
