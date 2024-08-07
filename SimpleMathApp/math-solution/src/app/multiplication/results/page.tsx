'use client'
import { useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ResultsPage() {
    const [mistakes, setMistakes] = useState<string[]>([])
    const counterInt = window.sessionStorage.getItem('count')
    const counter = counterInt ? JSON.parse(counterInt) : 0
    const yourScore = mistakes ? counter - mistakes.length : counter
    const router = useRouter()

    const reset = () => {
        setMistakes([])
        window.sessionStorage.clear()
    }

    useEffect(() => {
        const wrongsStr = window.sessionStorage.getItem('wrongs')
        const wrongsArr = wrongsStr ? JSON.parse(wrongsStr) : []
        setMistakes(wrongsArr)
    },[router])

    const uniqueMistakesSet = new Set(mistakes)
    const uniqueMistakes = Array.from(uniqueMistakesSet)


  return (
    <div className="py-48 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center px-2">You scored <span className={yourScore > 16 ? "text-green-400" : "text-red-400"}>{yourScore}</span>/20</h1>
            <div className="text-center text-4xl">
                {yourScore < 20 && uniqueMistakes.length > 0 ? <h2>You need to memorize:</h2> : null}
                {uniqueMistakes.length > 0 ? uniqueMistakes.map((mistake) => (<>
                <p className="pt-5 text-red-500">{mistake}</p>
                </>)) : (null)}
                {yourScore === 20 ? <><h1 className="text-green-400 p-5">Well Done!</h1></> : null}
                {yourScore === 0 ? <><p className="text-cyan-400 p-5">You may want to review the whole multiplication table, you can make it!</p></> : null}
            </div>
        <div className="flex flex-row gap-2 p-12">
            <Link href="/home"><button className="font-semibold border border-1 border-purple-500 rounded py-2 px-4 bg-purple-700 hover:bg-purple-600 outline-none" onClick={reset}>Home</button></Link>
            <Link href="/multiplication"><button className="font-semibold border border-1 border-blue-600 rounded py-2 px-4 bg-blue-800 hover:bg-blue-700 outline-none" onClick={reset}>Repeat</button></Link>
        </div>
    </div>
  )
}
