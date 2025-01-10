"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function BlogPagination({ posts }) {
  const postsPerPage = 10
  const [currentPostIndex, setCurrentPostIndex] = useState(0)

  const [paginated, setPaginated] = useState(posts.slice(currentPostIndex, currentPostIndex + postsPerPage))

  const updatePaginated = () => {
    setPaginated(posts.slice(currentPostIndex, currentPostIndex + postsPerPage))
  }

  useEffect(updatePaginated, [currentPostIndex])

  const previous = function () {
    if (currentPostIndex - postsPerPage < 0) {
      setCurrentPostIndex(0)
    } else {
      setCurrentPostIndex(currentPostIndex - postsPerPage)
    }
  }

  const next = function () {
    if (currentPostIndex + postsPerPage > posts.length - postsPerPage) {
      setCurrentPostIndex(posts.length - postsPerPage)
    } else {
      setCurrentPostIndex(currentPostIndex + postsPerPage)
    }
  }

  return (
    <>
      <ol>
        {paginated.map((post) => (
          <li value={post.id} key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
      <button onClick={previous}>Taakse</button>
      <button onClick={next}>Seuraava</button>
    </>
  )
}
