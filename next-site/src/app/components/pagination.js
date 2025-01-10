"use client"

import { useState } from "react"
import Link from "next/link"

export default function BlogPagination({ posts }) {
  const postsPerPage = 10
  const [currentPostIndex, setCurrentPostIndex] = useState(0)

  const previous = () => {}
  const next = () => {}

  return (
    <>
      <ol>
        {posts.map((post) => (
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
