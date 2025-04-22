import BlogPagination from "@/app/components/pagination"

export default async function Blog() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await data.json()

  return (
    <>
      <h1>Blogi</h1>
      <p>
        Tämä data on haettu sivuston rakentamisen aikana osoitteesta
        <a href="https://jsonplaceholder.typicode.com/"> jsonplaceholder.typicode.com</a>
      </p>
      <BlogPagination posts={posts} />
    </>
  )
}
