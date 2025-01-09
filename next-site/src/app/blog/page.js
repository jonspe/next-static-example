// import { useState } from "react";

export default async function Home() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await data.json()

    return (
      <>
        <h1>Blogi</h1>
        <p>
            Tämä data on haettu sivuston rakentamisen aikana osoitteesta
            <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder.typicode.com</a>
        </p>
        <ol>
            {posts.map(post => (
                <li value={post.id} key={post.id}>
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                </li>
            ))}
        </ol>
      </>
    );
  }
  