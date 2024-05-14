import {cookies} from "next/headers"

export default function AboutPage() {
    const cookieStore = cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)
    console.log("About server component")
  return (
    <div><h1>About page {new Date().toLocaleTimeString()}</h1></div>
  )
}
