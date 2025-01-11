import BackButton from "@/app/components/backbutton"
import FadeDiv from "@/app/components/fadediv"

export async function generateStaticParams() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/")
  const posts = await data.json()

  return posts.map((post) => ({ slug: post.id.toString() }))
}

export default async function Page({ params }) {
  const { slug } = await params

  let [post, comments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`).then((response) => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts/${slug}/comments`).then((response) => response.json()),
  ])

  return (
    <FadeDiv>
      <h1>{post.title}</h1>
      <section>{post.body}</section>
      <BackButton />
      <h2>Kommentit</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} value={comment.id}>
            <b>{comment.email}</b>
            <br />
            {comment.body}
            <br />
          </li>
        ))}
      </ul>
    </FadeDiv>
  )
}
