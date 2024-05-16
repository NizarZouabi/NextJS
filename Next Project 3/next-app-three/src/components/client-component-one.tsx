"use client"

import { useState } from "react"
// import { ServerComponentOne } from "./server-component-one"
// import { ClientComponentTwo } from "./client-component-two"

export const ClientComponentOne = ({children}: {children: React.ReactNode}) => {
    const [name, setName] = useState("Hero")
  return (
    <>
    <h1>client-component-one</h1>
    {children}
    </>
  )
}
