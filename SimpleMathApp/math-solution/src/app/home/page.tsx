'use client'
import Main from "../components/mainsection/links"

function HomePage() {
  return (
    <div className="flex flex-col max-h-screen justify-center items-center py-48 gap-5">
      <h1 className="text-6xl text-center">Time for a review!</h1>
      <Main />
    </div>
  )
}

export default HomePage
