'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import generateMulti from "@/utils/gen"
import Timer from "@/_lib/Timer"

interface QuestionsProps {
  userAnswer: string
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>
}

export default function Questions(props: QuestionsProps) {
  const {userAnswer, setUserAnswer} = props
  const [question, setQuestion] = useState<{question: string; correctAnswer:number}>({question:'', correctAnswer: 0})
  const [feedback, setFeedback] = useState<string>('')
  const [wrongs, setWrongs] = useState<string[]>([])
  const [count, setCount] = useState<number>(0)
  // const [answered, setAnswered] = useState<boolean>(false);
  const router = useRouter()
  const isCorrect = parseInt(userAnswer) === question.correctAnswer
  const [resetInput, setResetInput] = useState<boolean>(false)

  const addToWrongs = () => {
    setWrongs([...wrongs, question.question])
    const updatedWrongs = [...wrongs, question.question]
    window.sessionStorage.setItem('wrongs', JSON.stringify(updatedWrongs))
  }

  const submit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

    if(isCorrect){
      setFeedback('Correct!')
    } else {
      setFeedback('Wrong!')
      addToWrongs()
    }

    setCount(count +1);
    window.sessionStorage.setItem('count', JSON.stringify(count +1));
    // setAnswered(true)
  }

  const handleTimeUp = () => {
    router.push("/multiplication/results")
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value)
  }

  const reset = () => {
    window.sessionStorage.clear()
  }

  useEffect(() => {
    const newQuestion = generateMulti()
    setQuestion(newQuestion)
    window.sessionStorage.setItem('currentQuestion', JSON.stringify(newQuestion))
    
    const prevCountStr = window.sessionStorage.getItem('count');
    const prevCount = prevCountStr ? parseInt(prevCountStr) : 0;
    setCount(prevCount);
    
    const wrongsStr = window.sessionStorage.getItem('wrongs')
    const wrongsArr = wrongsStr ? JSON.parse(wrongsStr) : []
    setWrongs(wrongsArr)

    if(prevCount === 20){
        router.push("/multiplication/results")
    }

    if(resetInput){
      setFeedback('')
      setUserAnswer('')
      setQuestion(generateMulti())
      setResetInput(false)
    }

  },[router, resetInput, setUserAnswer])

  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen py-48">
      <Timer minutes={2} onTimeUp={handleTimeUp} />
      <p className="p-2 text-5xl">{question.question} = {feedback ? question.correctAnswer : "?"}</p>
      {feedback === "Wrong!" || feedback === "Time is up!" ? <button onClick={() => setResetInput(true)} className="font-semibold border border-1 border-green-400 rounded py-2 px-4 bg-green-600 hover:bg-green-500">Next</button> : <input type='number' className="bg-gray-800 rounded p-1" value={userAnswer} onChange={changeHandler}/>}
      <p className={feedback === "Correct!" ? "text-green-400 font-md" : "text-red-500"}>{feedback}</p>
      <div className="flex flex-col items-center gap-2">
        <div className='flex flex-row gap-2'>
        {!feedback ? <button className="font-semibold border border-1 border-purple-500 rounded py-2 px-4 bg-purple-700 hover:bg-purple-600 outline-none" onClick={submit}>Submit</button> : null}
        {feedback === "Correct!" ? <button onClick={() => setResetInput(true)} className="font-semibold border border-1 border-green-400 rounded py-2 px-4 bg-green-600 hover:bg-green-500">Next</button> : null}
        </div>
      <Link href="/home"><button className="font-semibold border border-1 border-purple-500 rounded py-2 px-4 bg-purple-700 hover:bg-purple-600 outline-none" onClick={reset}>Go Back</button></Link>
      </div>
    </div>
  )
}
