"use client"
import 'server-only';
import { serverSideFunction } from "@/utils/server-utils"


export default function ClientPage() {
    console.log("Client route rendered")
    const result = serverSideFunction()
  return (
    <div>
        <h3>ClientRoutePage</h3>
        <p>{result}</p>
    </div>
  )
}
