'use client'
import Questions from "@/app/components/multiplicationsector/questions"
import { useState } from "react"

export default function MultiplicationPage() {
  const [userAnswer, setUserAnswer] = useState<string>('')

  return (
    <div>
      <Questions userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
    </div>
  )
}
