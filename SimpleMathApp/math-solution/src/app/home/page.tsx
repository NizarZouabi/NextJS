'use client'
import Main from "../../components/main_section/Links"

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center pt-48 gap-5">
      <h1 className="text-6xl text-center">Time for a review!</h1>
      <Main />
    </div>
  )
}

export default HomePage
