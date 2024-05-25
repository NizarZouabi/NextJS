'use client'
import Link from "next/link"

export default function Links() {
  return (
    <div className="flex flex-col gap-2 max-h-screen text-center px-2">
        <h2 className="text-xl">Wich unit you want to revisit today?</h2>
        <Link href="/home/multiplication"><p className="hover:underline text-cyan-400">Multiplication</p></Link>
        </div>
  )
}