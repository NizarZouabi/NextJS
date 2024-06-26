"use client" //since react components in next are server components by default
import {usePathname} from "next/navigation" // we use "use client"
import Link from 'next/link'
import "./style.css"
import {useState} from 'react'

// export const metadata = {
//     title: 'Next.js',
//     description: 'Generated by Next.js',
//   }

  const navLinks = [
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password", href:"/forgot-password"}
  ];
  
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    const [input, setInput] = useState("")
    return (
      <div>
        <div>
          <input onChange={e => setInput(e.target.value)}/>

      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        
        return (
          <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
            {link.name}
            </Link>
        )
      })}

          {children}
          <h1>Inner layout</h1>
          </div>
          </div>
    )
  }
  