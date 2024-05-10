import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>
        Welcome Home (First Route) <b/>
        <Link href="/blog">Blog</Link>
      </h1>
    </div>
  )
}
//npm run dev