import React from 'react'

import { useBooksData } from '../../hooks/useBooksData'
import Book from '../Book'
import './style.scss'

const BooksSummary = () => {
  const books = useBooksData()

  return books.map(({ node: { html, frontmatter } }) => (
    <Book {...frontmatter} html={html} />
  ))
}

export default BooksSummary
